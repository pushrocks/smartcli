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
            smartCliTestObject.addCommand('awesome');
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
    describe('.trigger', function () {
        let hasExecuted = false;
        it('should accept a command', function (done) {
            smartCliTestObject.addTrigger('triggerme')
                .subscribe(() => {
                hasExecuted = true;
            });
            done();
        });
        it('should not have executed yet', function () {
            should(hasExecuted).be.false();
        });
        it('should execute when triggered', function (done) {
            smartCliTestObject.trigger('triggerme');
            should(hasExecuted).be.true();
            done();
        });
    });
    describe('.startParse', function () {
        it('should start parsing the CLI input', function () {
            smartCliTestObject.startParse();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUVyQiwwQ0FBMEM7QUFDMUMsaUNBQWdDO0FBRWhDLFFBQVEsQ0FBQyx5QkFBeUIsRUFBQztJQUMvQixJQUFJLGtCQUFxQyxDQUFBO0lBQ3pDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBQztRQUN0QixFQUFFLENBQUMsOEJBQThCLEVBQUM7WUFDOUIsa0JBQWtCLEdBQUcsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUE7WUFDNUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDL0QsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUNGLFFBQVEsQ0FBQyxhQUFhLEVBQUM7UUFDbkIsRUFBRSxDQUFDLHVCQUF1QixFQUFDO1lBQ3ZCLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUM1QyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ0YsUUFBUSxDQUFDLGVBQWUsRUFBQztRQUNyQixFQUFFLENBQUMscUNBQXFDLEVBQUMsVUFBUyxJQUFJO1lBQ2xELGtCQUFrQixDQUFDLFlBQVksRUFBRTtpQkFDNUIsSUFBSSxDQUFDO2dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQTtZQUM3QyxDQUFDLENBQUMsQ0FBQTtZQUNOLElBQUksRUFBRSxDQUFBO1FBQ1YsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUNGLFFBQVEsQ0FBQyxVQUFVLEVBQUU7UUFDakIsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFBO1FBQ3ZCLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxVQUFTLElBQUk7WUFDdkMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztpQkFDckMsU0FBUyxDQUFDO2dCQUNQLFdBQVcsR0FBRyxJQUFJLENBQUE7WUFDdEIsQ0FBQyxDQUFDLENBQUE7WUFDTixJQUFJLEVBQUUsQ0FBQTtRQUNWLENBQUMsQ0FBQyxDQUFBO1FBQ0YsRUFBRSxDQUFDLDhCQUE4QixFQUFFO1lBQy9CLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDbEMsQ0FBQyxDQUFDLENBQUE7UUFDRixFQUFFLENBQUMsK0JBQStCLEVBQUUsVUFBUyxJQUFJO1lBQzdDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUN2QyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFBO1lBQzdCLElBQUksRUFBRSxDQUFBO1FBQ1YsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUNGLFFBQVEsQ0FBQyxhQUFhLEVBQUM7UUFDbkIsRUFBRSxDQUFDLG9DQUFvQyxFQUFDO1lBQ3BDLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ25DLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQSJ9