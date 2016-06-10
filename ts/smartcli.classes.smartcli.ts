import "typings-global";

import * as plugins from "./smartcli.plugins"
import * as SmartcliInteractions from "./smartcli.interaction";

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
    }
    addAlias(keyArg,aliasArg){
        this.argv = this.argv.alias(keyArg,aliasArg);
    };
    addCommand(definitionArg:{commandName:string}){
        let done = plugins.q.defer();
        this.parseStarted
            .then(() => {
                if (this.argv._.indexOf(definitionArg.commandName) == 0) {
                    done.resolve();
                } else {
                    return done.reject();
                }
            });
        return done.promsise;
    };
    addQuestion(definitionArg:{questionString:string,questionType:string}){
        
    };
    addVersion(versionArg:string){
        this.version = versionArg;
        this.parseStarted
            .then(() => {

            })
    }
    standardTask(){
        let done = plugins.q.defer();
        this.parseStarted
            .then(() => {
                if(plugins.argv._.length == 0 || this.commands.length == 0){
                    done.resolve();
                } else {
                    done.reject();
                };
            });
        return done.promise;
    }
    startParse(){
        this.parseStarted.resolve();
    }

}