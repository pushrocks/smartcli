import { tap, expect } from 'tapbundle'

import smartcli = require('../dist/index')

let smartCliTestObject: smartcli.Smartcli

tap.test('should create a new Smartcli', async () => {
  smartCliTestObject = new smartcli.Smartcli()
  return expect(smartCliTestObject).be.instanceof(smartcli.Smartcli)
})


tap.test('should add an command', async () => {
  smartCliTestObject.addCommand('awesome')
})


tap.test('should start parsing a standardTask', async () => {
  smartCliTestObject.standardTask()
    .then(() => {
      console.log('this is the standard Task!')
    })
})

let hasExecuted: boolean = false
tap.test('should accept a command', async () => {
  smartCliTestObject.addTrigger('triggerme')
    .subscribe(() => {
      hasExecuted = true
    })
})
tap.test('should not have executed yet', async () => {
  expect(hasExecuted).to.be.false
})
tap.test('should execute when triggered', async () => {
  smartCliTestObject.trigger('triggerme')
  expect(hasExecuted).be.true
})


tap.test('should start parsing the CLI input', async () => {
  smartCliTestObject.startParse()
})

