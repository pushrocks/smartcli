import "typings-global";

import * as interfaces from "./smartcli.interfaces"
import * as plugins from "./smartcli.plugins"
import * as SmartcliChecks from "./smartcli.checks";
import * as SmartcliGetters from "./smartcli.getters";
import * as SmartcliInteractions from "./smartcli.interaction";

export class Smartcli {
    questionsDone;
    commands:interfaces.CliCommand[];
    questions;
    constructor(){
        this.questionsDone = plugins.q.defer();
    }
    addCommand(definitionArg:{commandName:string}){
        let done = plugins.q.defer();
        if (plugins.argv._.indexOf(definitionArg.commandName) == 0) {
            done.resolve();
        } else {
            return done.reject();
        }
        return done.promsise;
    };
    addQuestion(definitionArg:{questionString:string,questionType:string}){
        
    };
    addVersion(versionArg:string){

    }
    startParse(){

    }

}