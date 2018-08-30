import { tap, expect } from '@pushrocks/tapbundle';
import { Subject } from 'rxjs';

import smartcli = require('../ts/index');

let smartCliTestObject: smartcli.Smartcli;

tap.test('should create a new Smartcli', async () => {
  smartCliTestObject = new smartcli.Smartcli();
  expect(smartCliTestObject).to.be.instanceof(smartcli.Smartcli);
});

tap.test('should add an command', async () => {
  expect(smartCliTestObject.addCommand('awesome')).to.be.instanceOf(Subject);
});

tap.test('should start parsing a standardTask', async () => {
  expect(smartCliTestObject.standardTask()).to.be.instanceOf(Subject);
});

let hasExecuted: boolean = false;

tap.test('should accept a command', async () => {
  smartCliTestObject.addTrigger('triggerme').subscribe(() => {
    hasExecuted = true;
  });
});

tap.test('should not have executed yet', async () => {
  expect(hasExecuted).to.be.false;
});

tap.test('should execute when triggered', async () => {
  smartCliTestObject.trigger('triggerme');
  expect(hasExecuted).be.true;
});

tap.test('should start parsing the CLI input', async () => {
  smartCliTestObject.startParse();
  expect(smartCliTestObject.parseStarted.promise).to.be.instanceOf(Promise);
});

tap.start();
