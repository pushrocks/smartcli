import * as q from 'q'
import { Subject } from 'rxjs'

import * as plugins from './smartcli.plugins'

// import classes
import { Objectmap } from 'lik'

// interfaces
export interface ICommandPromiseObject {
    commandName: string,
    promise: q.Promise<void>
}

export interface ITriggerObservableObject {
    triggerName: string
    subject: Subject<void>
}

export class Smartcli {
    argv: any
    questionsDone
    parseStarted
    commands
    questions
    version: string

    /**
     * map of all Command/Promise objects to keep track
     */
    allCommandPromisesMap = new Objectmap<ICommandPromiseObject>()

    /**
     * map of all Trigger/Observable objects to keep track
     */
    allTriggerObservablesMap = new Objectmap<ITriggerObservableObject>()

    constructor() {
        this.argv = plugins.yargs
        this.questionsDone = q.defer()
        this.parseStarted = q.defer()
    }

    /**
     * adds an alias, meaning one equals the other in terms of command execution.
     */
    addCommandAlias(keyArg,aliasArg): void {
        this.argv = this.argv.alias(keyArg,aliasArg)
        return
    }

    /**
     * adds a Command by returning a Promise that reacts to the specific commandString given.
     * Note: in e.g. "npm install something" the "install" is considered the command.
     */
    addCommand(commandNameArg: string): q.Promise<any> {
        let done = q.defer<any>()
        this.allCommandPromisesMap.add({
            commandName: commandNameArg,
            promise: done.promise
        })
        this.parseStarted.promise
            .then(() => {
                if (this.argv._.indexOf(commandNameArg) === 0) {
                    done.resolve(this.argv)
                } else {
                    done.reject(this.argv)
                }
            })
        return done.promise
    }

    /**
     * gets a Promise for a command word
     */
    getCommandPromiseByName(commandNameArg: string): q.Promise<void> {
        return this.allCommandPromisesMap.find(commandDeferredObjectArg => {
            return commandDeferredObjectArg.commandName === commandNameArg
        }).promise
    }

    /**
     * adds a Trigger. Like addCommand(), but returns an subscribable observable 
     */
    addTrigger(triggerNameArg: string) {
        let triggerSubject = new Subject<void>()
        this.allTriggerObservablesMap.add({
            triggerName: triggerNameArg,
            subject: triggerSubject
        })
        this.addCommand(triggerNameArg).then(() => {
            triggerSubject.next()
        })
        return triggerSubject
    }

    /**
     * execute trigger by name
     * @param commandNameArg - the name of the command to trigger
     */
    trigger(triggerName: string) {
        let triggerSubject = this.allTriggerObservablesMap.find(triggerObservableObjectArg => {
            return triggerObservableObjectArg.triggerName === triggerName
        }).subject
        triggerSubject.next()
        return triggerSubject
    }

    /**
     * allows to specify help text to be printed above the rest of the help text
     */
    addHelp(optionsArg: {
        helpText: string
    }) {
        this.addCommand('help').then(argvArg => {
            plugins.beautylog.log(optionsArg.helpText)
        })
    }

    /**
     * specify version to be printed for -v --version
     */
    addVersion(versionArg: string) {
        this.version = versionArg
        this.addCommandAlias('v','version')
        this.parseStarted.promise
            .then(() => {
                if (this.argv.v) {
                    console.log(this.version)
                }
            })
    }

    /**
     * returns promise that is resolved when no commands are specified
     */
    standardTask(): q.Promise<any> {
        let done = q.defer<any>()
        this.allCommandPromisesMap.add({
            commandName: 'standard',
            promise: done.promise
        })
        this.parseStarted.promise
            .then(() => {
                if (this.argv._.length === 0 && !this.argv.v) {
                    done.resolve(this.argv)
                } else {
                    done.reject(this.argv)
                }
            })
        return done.promise
    }

    /**
     * start the process of evaluating commands
     */
    startParse(): void {
        this.argv = this.argv.argv
        this.parseStarted.resolve()
        return
    }

}
