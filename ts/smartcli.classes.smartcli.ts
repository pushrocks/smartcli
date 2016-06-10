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
        this.parseStarted.promise
            .then(() => {
                if (this.argv._.indexOf(definitionArg.commandName) == 0) {
                    done.resolve(this.argv);
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
                    done.resolve();
                } else {
                    done.reject();
                };
            });
        return done.promise;
    }
    startParse(){
        this.argv = this.argv.argv;
        this.parseStarted.resolve();
    }

}