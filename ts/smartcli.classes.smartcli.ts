import * as smartpromise from '@pushrocks/smartpromise';
import { Subject } from 'rxjs';

import * as plugins from './smartcli.plugins';

// import classes
import { ObjectMap } from '@pushrocks/lik';

// interfaces
export interface ICommandPromiseObject {
  commandName: string;
  promise: Promise<void>;
}

export interface ITriggerObservableObject {
  triggerName: string;
  subject: Subject<any>;
}

/**
 * class to create a new instance of Smartcli. Handles parsing of command line arguments.
 */
export class Smartcli {
  argv: any;
  questionsDone;
  parseStarted: smartpromise.Deferred<any>;
  commands;
  questions;
  version: string;
  private checkForEnvCliCall = true;

  /**
   * map of all Trigger/Observable objects to keep track
   */
  allTriggerObservablesMap = new ObjectMap<ITriggerObservableObject>();

  /**
   * The constructor of Smartcli
   */
  constructor() {
    this.argv = plugins.yargs;
    this.questionsDone = smartpromise.defer();
    this.parseStarted = smartpromise.defer();
  }

  /**
   * halts any execution of commands if (process.env.CLI_CALL === false)
   */
  disableEnvCliCall() {
    this.checkForEnvCliCall = false;
  }

  /**
   * adds an alias, meaning one equals the other in terms of command execution.
   */
  addCommandAlias(keyArg, aliasArg): void {
    this.argv = this.argv.alias(keyArg, aliasArg);
    return;
  }

  /**
   * adds a Command by returning a Promise that reacts to the specific commandString given.
   * Note: in e.g. "npm install something" the "install" is considered the command.
   */
  addCommand(commandNameArg: string): Subject<any> {
    const triggerSubject = this.addTrigger(commandNameArg);
    this.parseStarted.promise.then(() => {
      if (this.argv._.indexOf(commandNameArg) === 0) {
        this.trigger(commandNameArg);
      }
    });
    return triggerSubject;
  }

  /**
   * adds a Trigger. Like addCommand(), but returns an subscribable observable
   */
  addTrigger(triggerNameArg: string) {
    const triggerSubject = new Subject<any>();
    if (!this.getTriggerSubject(triggerNameArg)) {
      this.allTriggerObservablesMap.add({
        triggerName: triggerNameArg,
        subject: triggerSubject
      });
    } else {
      throw new Error(`you can't add a trigger twice`);
    }
    return triggerSubject;
  }

  /**
   * execute trigger by name
   * @param commandNameArg - the name of the command to trigger
   */
  trigger(triggerName: string) {
    const triggerSubject = this.getTriggerSubject(triggerName);
    triggerSubject.next(this.argv);
    return triggerSubject;
  }

  getTriggerSubject(triggerName: string) {
    const triggerObservableObject = this.allTriggerObservablesMap.find(
      triggerObservableObjectArg => {
        return triggerObservableObjectArg.triggerName === triggerName;
      }
    );
    if (triggerObservableObject) {
      return triggerObservableObject.subject;
    } else {
      return null;
    }
  }

  /**
   * allows to specify help text to be printed above the rest of the help text
   */
  addHelp(optionsArg: { helpText: string }) {
    this.addCommand('help').subscribe(argvArg => {
      plugins.smartlog.defaultLogger.log('info', optionsArg.helpText);
    });
  }

  /**
   * specify version to be printed for -v --version
   */
  addVersion(versionArg: string) {
    this.version = versionArg;
    this.addCommandAlias('v', 'version');
    this.parseStarted.promise.then(() => {
      if (this.argv.v) {
        console.log(this.version);
      }
    });
  }

  /**
   * adds a trigger that is called when no command is specified
   */
  standardTask(): Subject<any> {
    const standardSubject = this.addTrigger('standardTask');
    this.parseStarted.promise.then(() => {
      if (
        (this.argv._.length === 0 ||
          (this.argv._.length === 1 && this.argv._[0].startsWith('test/'))) &&
        !this.argv.v
      ) {
        this.trigger('standardTask');
      }
    });
    return standardSubject;
  }

  /**
   * start the process of evaluating commands
   */
  startParse(): void {
    if (!process.env.CLI_CALL && this.checkForEnvCliCall) {
      console.log(
        `note: @pushrocks/smartcli: You called .startParse() on a SmartCli instance. However process.env.CLI_CALL being absent prevented parsing.`
      );
      return;
    }
    this.argv = this.argv.argv;
    this.parseStarted.resolve();
    return;
  }
}
