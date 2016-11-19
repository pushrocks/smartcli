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
    describe('.startParse', function () {
        it('should start parsing the CLI input', function () {
            smartCliTestObject.startParse();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUVyQiwwQ0FBMEM7QUFDMUMsaUNBQWdDO0FBRWhDLFFBQVEsQ0FBQyx5QkFBeUIsRUFBQztJQUMvQixJQUFJLGtCQUFxQyxDQUFBO0lBQ3pDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBQztRQUN0QixFQUFFLENBQUMsOEJBQThCLEVBQUM7WUFDOUIsa0JBQWtCLEdBQUcsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUE7WUFDNUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDL0QsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUNGLFFBQVEsQ0FBQyxhQUFhLEVBQUM7UUFDbkIsRUFBRSxDQUFDLHVCQUF1QixFQUFDO1lBQ3ZCLGtCQUFrQixDQUFDLFVBQVUsQ0FBQztnQkFDMUIsV0FBVyxFQUFFLFNBQVM7YUFDekIsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUNGLFFBQVEsQ0FBQyxlQUFlLEVBQUM7UUFDckIsRUFBRSxDQUFDLHFDQUFxQyxFQUFDLFVBQVMsSUFBSTtZQUNsRCxrQkFBa0IsQ0FBQyxZQUFZLEVBQUU7aUJBQzVCLElBQUksQ0FBQztnQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUE7WUFDN0MsQ0FBQyxDQUFDLENBQUE7WUFDTixJQUFJLEVBQUUsQ0FBQTtRQUNWLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7SUFDRixRQUFRLENBQUMsYUFBYSxFQUFDO1FBQ25CLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBQztZQUNwQyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUNuQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==