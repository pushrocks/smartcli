export interface CliOption {
    name: string;
    specified:boolean;
    value: any;
}

export interface Directory {
    path: string;
}

export interface CliCommand {
    specified: boolean;
    name: string;
    arguments:CliCommandArgument[];
}

export interface CliCommandArgument {
    specified:boolean;
    name:string;
    level:number;
}