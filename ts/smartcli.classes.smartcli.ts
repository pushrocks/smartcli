import * as smartpromise from '@pushrocks/smartpromise';
import { Subject } from 'rxjs';

import * as plugins from './smartcli.plugins';

// import classes
import { Objectmap } from '@pushrocks/lik';

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
  private onlyOnProcessEnvCliCall = false;

  /**
   * map of all Trigger/Observable objects to keep track
   */
  allTriggerObservablesMap = new Objectmap<ITriggerObservableObject>();

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
  onlyTriggerOnProcessEnvCliCall() {
    this.onlyOnProcessEnvCliCall = true;
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
    let triggerSubject = this.addTrigger(commandNameArg);
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
    let triggerSubject = new Subject<any>();
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
    let triggerSubject = this.getTriggerSubject(triggerName);
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
      plugins.smartlog.defaultLogger.info(optionsArg.helpText);
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
    let standardSubject = this.addTrigger('standardTask');
    this.parseStarted.promise.then(() => {
      if (this.argv._.length === 0 && !this.argv.v) {
        if (this.onlyOnProcessEnvCliCall) {
          if (process.env.CLI_CALL === 'true') {
            this.trigger('standardTask');
          } else {
            return;
          }
        } else {
          this.trigger('standardTask');
        }
      }
    });
    return standardSubject;
  }

  /**
   * start the process of evaluating commands
   */
  startParse(): void {
    this.argv = this.argv.argv;
    this.parseStarted.resolve();
    return;
  }
}
