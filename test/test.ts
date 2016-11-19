import 'typings-test'

import smartcli = require('../dist/index')
import * as should from 'should'

describe('smartcli.Smartcli class',function(){
    let smartCliTestObject: smartcli.Smartcli
    describe('new Smartcli()',function(){
        it('should create a new Smartcli',function(){
            smartCliTestObject = new smartcli.Smartcli()
            should(smartCliTestObject).be.instanceof(smartcli.Smartcli)
        })
    })
    describe('.addCommand',function(){
        it('should add an command',function(){
            smartCliTestObject.addCommand({
                commandName: 'awesome'
            })
        })
    })
    describe('.standardTask',function(){
        it('should start parsing a standardTask',function(done){
            smartCliTestObject.standardTask()
                .then(() => {
                    console.log('this is the standard Task!')
                })
            done()
        })
    })
    describe('.startParse',function(){
        it('should start parsing the CLI input',function(){
            smartCliTestObject.startParse()
        })
    })
})
