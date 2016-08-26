import "typings-global";

import * as plugins from "./smartcli.plugins";
import {Question} from "./smartcli.classes.interaction";

export class Smartcli {
    argv;
    questionsDone;
    parseStarted;
    commands;
    questions;
    version:string;
    constructor(){
        this.argv = plugins.argv;
        this.questionsDone = plugins.q.defer();
        this.parseStarted = plugins.q.defer();
    };

    /**
     * adds an alias, meaning one equals the other in terms of triggering associated commands
     */
    addAlias(keyArg,aliasArg){
        this.argv = this.argv.alias(keyArg,aliasArg);
    };

    /**
     * adds a Command by returning a Promise that reacts to the specific commandString given.
     * 
     * Note: in e.g. "npm install something" the "install" is considered the command.
     */
    addCommand(definitionArg:{commandName:string}){
        let done = plugins.q.defer();
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
    getCommandPromise(commandNameArg){
        //TODO
    }
    addQuestion(definitionArg:{questionString:string,questionType:string}){
        
    };
    addHelp(){

    }
    addVersion(versionArg:string){
        this.version = versionArg;
        this.addAlias("v","version");
        this.parseStarted.promise
            .then(() => {
                if(this.argv.v){
                    console.log(this.version);
                }
            })
    }
    standardTask(){
        let done = plugins.q.defer();
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
    startParse(){
        this.argv = this.argv.argv;
        this.parseStarted.resolve();
    }

}