/// <reference path="index.ts" />
interface CliOption {
    name: string;
    specified:boolean;
    value: any;
}

interface Directory {
    path: string;
}

interface CliCommand {
    specified: boolean;
    name: string;
    second: string;
    third: string;
    fourth: string;
}

interface CliCommandArgument {
    specified:boolean;
    name:string;
}

