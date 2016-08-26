"use strict";
require("typings-test");
const smartcli = require("../dist/index");
let beautylog = require("beautylog");
let should = require("should");
describe("smartcli.Smartcli class", function () {
    let smartCliTestObject;
    describe("new Smartcli()", function () {
        it("should create a new Smartcli", function () {
            smartCliTestObject = new smartcli.Smartcli();
            smartCliTestObject.should.be.instanceof(smartcli.Smartcli);
        });
    });
    describe(".addCommand", function () {
        it("should add an command", function () {
            smartCliTestObject.addCommand({
                commandName: "awesome"
            });
        });
    });
    describe(".standardTask", function () {
        it("should start parsing a standardTask", function (done) {
            smartCliTestObject.standardTask()
                .then(() => {
                console.log("this is the standard Task!");
            });
            done();
        });
    });
    describe(".startParse", function () {
        it("should start parsing the CLI input", function () {
            smartCliTestObject.startParse();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sY0FBYyxDQUFDLENBQUE7QUFFdEIsTUFBTyxRQUFRLFdBQVcsZUFBZSxDQUFDLENBQUM7QUFDM0MsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3JDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUUvQixRQUFRLENBQUMseUJBQXlCLEVBQUM7SUFDL0IsSUFBSSxrQkFBb0MsQ0FBQztJQUN6QyxRQUFRLENBQUMsZ0JBQWdCLEVBQUM7UUFDdEIsRUFBRSxDQUFDLDhCQUE4QixFQUFDO1lBQzlCLGtCQUFrQixHQUFHLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzdDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0gsUUFBUSxDQUFDLGFBQWEsRUFBQztRQUNuQixFQUFFLENBQUMsdUJBQXVCLEVBQUM7WUFDdkIsa0JBQWtCLENBQUMsVUFBVSxDQUFDO2dCQUMxQixXQUFXLEVBQUMsU0FBUzthQUN4QixDQUFDLENBQUM7UUFFUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0gsUUFBUSxDQUFDLGVBQWUsRUFBQztRQUNyQixFQUFFLENBQUMscUNBQXFDLEVBQUMsVUFBUyxJQUFJO1lBQ2xELGtCQUFrQixDQUFDLFlBQVksRUFBRTtpQkFDNUIsSUFBSSxDQUFDO2dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUM5QyxDQUFDLENBQUMsQ0FBQztZQUNQLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUNGLFFBQVEsQ0FBQyxhQUFhLEVBQUM7UUFDbkIsRUFBRSxDQUFDLG9DQUFvQyxFQUFDO1lBQ3BDLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQyJ9