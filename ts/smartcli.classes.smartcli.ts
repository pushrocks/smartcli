import "typings-global";

import * as plugins from "./smartcli.plugins";
import * as interaction from "./smartcli.classes.interaction";

// import classes
import {Objectmap} from "lik";

// interfaces
export interface commandPromiseObject {
    commandName:string;
    promise: plugins.q.Promise<any>;
};

export class Smartcli {
    argv:any;
    questionsDone;
    parseStarted;
    commands;
    questions;
    version:string;

    // maps
    allCommandPromises = new Objectmap<commandPromiseObject>();
    constructor(){
        this.argv = plugins.yargs;
        this.questionsDone = plugins.q.defer();
        this.parseStarted = plugins.q.defer();
    };

    /**
     * adds an alias, meaning one equals the other in terms of triggering associated commands
     */
    addAlias(keyArg,aliasArg):void {
        this.argv = this.argv.alias(keyArg,aliasArg);
        return;
    };

    /**
     * adds a Command by returning a Promise that reacts to the specific commandString given.
     * 
     * Note: in e.g. "npm install something" the "install" is considered the command.
     */
    addCommand(definitionArg:{commandName:string}):plugins.q.Promise<any>{
        let done = plugins.q.defer<any>();
        this.parseStarted.promise
            .then(() => {
                if (this.argv._.indexOf(definitionArg.commandName) == 0) {
                    done.resolve(this.argv);
                } else {
                    done.reject(this.argv);
                }
            });
        return done.promise;
    };

    /**
     * gets a Promise for a command word
     */
    getCommandPromiseByName(commandNameArg:string){
        return this.allCommandPromises.find(commandPromiseObjectArg => {
            return commandPromiseObjectArg.commandName === commandNameArg;
        }).promise;
    };

    /**
     * allows to specify help text to be printed above the rest of the help text
     */
    addHelp(optionsArg:{
        helpText:string
    }){
        this.addCommand({
            commandName:"help"
        }).then(argvArg => {
            plugins.beautylog.log(optionsArg.helpText);
        })
    };

    /**
     * specify version to be printed for -v --version
     */
    addVersion(versionArg:string){
        this.version = versionArg;
        this.addAlias("v","version");
        this.parseStarted.promise
            .then(() => {
                if(this.argv.v){
                    console.log(this.version);
                }
            })
    };

    /**
     * returns promise that is resolved when no commands are specified
     */
    standardTask():plugins.q.Promise<any>{
        let done = plugins.q.defer<any>();
        this.parseStarted.promise
            .then(() => {
                if(this.argv._.length == 0 && !this.argv.v){
                    done.resolve(this.argv);
                } else {
                    done.reject(this.argv);
                };
            });
        return done.promise;
    }

    /**
     * start the process of evaluating commands
     */
    startParse():void{
        this.argv = this.argv.argv;
        this.parseStarted.resolve();
        return;
    }

}