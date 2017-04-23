import { tap, expect } from 'tapbundle'
import { Subject } from 'rxjs'

import smartcli = require('../dist/index')

let smartCliTestObject: smartcli.Smartcli

tap.test('should create a new Smartcli', async () => {
  smartCliTestObject = new smartcli.Smartcli()
  return expect(smartCliTestObject).be.instanceof(smartcli.Smartcli)
}).catch(tap.threw)

tap.test('should add an command', async () => {
  return expect(smartCliTestObject.addCommand('awesome')).to.not.throw
}).catch(tap.threw)


tap.test('should start parsing a standardTask', async () => {
  return expect(smartCliTestObject.standardTask()).to.be.instanceOf(Promise)
}).catch(tap.threw)

let hasExecuted: boolean = false

tap.test('should accept a command', async () => {
  smartCliTestObject.addTrigger('triggerme')
    .subscribe(() => {
      hasExecuted = true
    })
  return expect(smartCliTestObject.addTrigger('triggerme')).to.be.instanceof(Subject)
}).catch(tap.threw)

tap.test('should not have executed yet', async () => {
  return expect(hasExecuted).to.be.false
}).catch(tap.threw)

tap.test('should execute when triggered', async () => {
  smartCliTestObject.trigger('triggerme')
  return expect(hasExecuted).be.true
}).catch(tap.threw)

tap.test('should start parsing the CLI input', async () => {
  smartCliTestObject.startParse()
  return await expect(smartCliTestObject.parseStarted.promise).to.eventually.be.fulfilled
}).catch(tap.threw)

tap.start()
