interface CliOption {
    name: string;
    specified: boolean;
    value: any;
}
interface Directory {
    path: string;
}
interface CliCommand {
    specified: boolean;
    name: string;
    arguments: CliCommandArgument[];
}
interface CliCommandArgument {
    specified: boolean;
    name: string;
    level: number;
}
