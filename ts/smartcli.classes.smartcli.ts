import * as q from 'q'

import * as plugins from './smartcli.plugins'

// import classes
import {Objectmap} from 'lik'

// interfaces
export interface ICommandDeferredObject {
    commandName: string
    deferred: q.Deferred<any>
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
    allCommandDeferredsMap = new Objectmap<ICommandDeferredObject>()

    constructor() {
        this.argv = plugins.yargs
        this.questionsDone = q.defer()
        this.parseStarted = q.defer()
    }

    /**
     * adds an alias, meaning one equals the other in terms of triggering associated commands
     */
    addAlias(keyArg,aliasArg): void {
        this.argv = this.argv.alias(keyArg,aliasArg)
        return
    }

    /**
     * adds a Command by returning a Promise that reacts to the specific commandString given.
     * Note: in e.g. "npm install something" the "install" is considered the command.
     */
    addCommand(definitionArg: {commandName: string}): q.Promise<any> {
        let done = q.defer<any>()
        this.allCommandDeferredsMap.add({
            commandName: definitionArg.commandName,
            deferred: done
        })
        this.parseStarted.promise
            .then(() => {
                if (this.argv._.indexOf(definitionArg.commandName) === 0) {
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
        return this.allCommandDeferredsMap.find(commandDeferredObjectArg => {
            return commandDeferredObjectArg.commandName === commandNameArg
        }).deferred.promise
    }

    /**
     * triggers a command by name
     * @param commandNameArg - the name of the command to trigger
     */
    triggerCommandByName(commandNameArg: string) {
        let commandDeferred = this.allCommandDeferredsMap.find(commandDeferredObjectArg => {
            return commandDeferredObjectArg.commandName === commandNameArg
        }).deferred
        commandDeferred.resolve()
        return commandDeferred.promise
    }

    /**
     * allows to specify help text to be printed above the rest of the help text
     */
    addHelp(optionsArg: {
        helpText: string
    }) {
        this.addCommand({
            commandName: 'help'
        }).then(argvArg => {
            plugins.beautylog.log(optionsArg.helpText)
        })
    }

    /**
     * specify version to be printed for -v --version
     */
    addVersion(versionArg: string) {
        this.version = versionArg
        this.addAlias('v','version')
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
