"use strict";
require("typings-test");
const smartcli = require("../dist/index");
const should = require("should");
describe('smartcli.Smartcli class', function () {
    let smartCliTestObject;
    describe('new Smartcli()', function () {
        it('should create a new Smartcli', function () {
            smartCliTestObject = new smartcli.Smartcli();
            should(smartCliTestObject).be.instanceof(smartcli.Smartcli);
        });
    });
    describe('.addCommand', function () {
        it('should add an command', function () {
            smartCliTestObject.addCommand({
                commandName: 'awesome'
            });
        });
    });
    describe('.standardTask', function () {
        it('should start parsing a standardTask', function (done) {
            smartCliTestObject.standardTask()
                .then(() => {
                console.log('this is the standard Task!');
            });
            done();
        });
    });
    describe('.triggerCommandByName', function () {
        let hasExecuted = false;
        it('should accept a command', function (done) {
            smartCliTestObject.addCommand({ commandName: 'triggerme' })
                .then(argvArg => {
                hasExecuted = true;
            });
            done();
        });
        it('should not have executed yet', function () {
            should(hasExecuted).be.false();
        });
        it('should execute when triggered', function (done) {
            smartCliTestObject.triggerCommandByName('triggerme')
                .then(argvArg => {
                should(hasExecuted).be.true();
                done();
            }).catch(err => { done(err); });
        });
    });
    describe('.startParse', function () {
        it('should start parsing the CLI input', function () {
            smartCliTestObject.startParse();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUVyQiwwQ0FBMEM7QUFDMUMsaUNBQWdDO0FBRWhDLFFBQVEsQ0FBQyx5QkFBeUIsRUFBQztJQUMvQixJQUFJLGtCQUFxQyxDQUFBO0lBQ3pDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBQztRQUN0QixFQUFFLENBQUMsOEJBQThCLEVBQUM7WUFDOUIsa0JBQWtCLEdBQUcsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUE7WUFDNUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDL0QsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUNGLFFBQVEsQ0FBQyxhQUFhLEVBQUM7UUFDbkIsRUFBRSxDQUFDLHVCQUF1QixFQUFDO1lBQ3ZCLGtCQUFrQixDQUFDLFVBQVUsQ0FBQztnQkFDMUIsV0FBVyxFQUFFLFNBQVM7YUFDekIsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUNGLFFBQVEsQ0FBQyxlQUFlLEVBQUM7UUFDckIsRUFBRSxDQUFDLHFDQUFxQyxFQUFDLFVBQVMsSUFBSTtZQUNsRCxrQkFBa0IsQ0FBQyxZQUFZLEVBQUU7aUJBQzVCLElBQUksQ0FBQztnQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUE7WUFDN0MsQ0FBQyxDQUFDLENBQUE7WUFDTixJQUFJLEVBQUUsQ0FBQTtRQUNWLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7SUFDRixRQUFRLENBQUMsdUJBQXVCLEVBQUU7UUFDOUIsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFBO1FBQ3ZCLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxVQUFTLElBQUk7WUFDdkMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLEVBQUMsV0FBVyxFQUFFLFdBQVcsRUFBQyxDQUFDO2lCQUNwRCxJQUFJLENBQUMsT0FBTztnQkFDVCxXQUFXLEdBQUcsSUFBSSxDQUFBO1lBQ3RCLENBQUMsQ0FBQyxDQUFBO1lBQ04sSUFBSSxFQUFFLENBQUE7UUFDVixDQUFDLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRTtZQUMvQixNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ2xDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsRUFBRSxDQUFDLCtCQUErQixFQUFFLFVBQVMsSUFBSTtZQUM3QyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUM7aUJBQy9DLElBQUksQ0FBQyxPQUFPO2dCQUNULE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUE7Z0JBQzdCLElBQUksRUFBRSxDQUFBO1lBQ1YsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN0QyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ0YsUUFBUSxDQUFDLGFBQWEsRUFBQztRQUNuQixFQUFFLENBQUMsb0NBQW9DLEVBQUM7WUFDcEMsa0JBQWtCLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDbkMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=