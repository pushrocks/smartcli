"use strict";
require("typings-global");
var plugins = require("./smartcli.plugins");
var Smartcli = (function () {
    function Smartcli() {
        this.questionsDone = plugins.q.defer();
    }
    Smartcli.prototype.addCommand = function (definitionArg) {
        var done = plugins.q.defer();
        if (plugins.argv._.indexOf(definitionArg.commandName) == 0) {
            done.resolve();
        }
        else {
            return done.reject();
        }
        return done.promsise;
    };
    ;
    Smartcli.prototype.addQuestion = function (definitionArg) {
    };
    ;
    Smartcli.prototype.addVersion = function (versionArg) {
    };
    Smartcli.prototype.startParse = function () {
    };
    return Smartcli;
}());
exports.Smartcli = Smartcli;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0Y2xpLmNsYXNzZXMuc21hcnRjbGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sZ0JBQWdCLENBQUMsQ0FBQTtBQUd4QixJQUFZLE9BQU8sV0FBTSxvQkFDekIsQ0FBQyxDQUQ0QztBQUs3QztJQUlJO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFDRCw2QkFBVSxHQUFWLFVBQVcsYUFBa0M7UUFDekMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25CLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDekIsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7O0lBQ0QsOEJBQVcsR0FBWCxVQUFZLGFBQXlEO0lBRXJFLENBQUM7O0lBQ0QsNkJBQVUsR0FBVixVQUFXLFVBQWlCO0lBRTVCLENBQUM7SUFDRCw2QkFBVSxHQUFWO0lBRUEsQ0FBQztJQUVMLGVBQUM7QUFBRCxDQTFCQSxBQTBCQyxJQUFBO0FBMUJZLGdCQUFRLFdBMEJwQixDQUFBIiwiZmlsZSI6InNtYXJ0Y2xpLmNsYXNzZXMuc21hcnRjbGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJ0eXBpbmdzLWdsb2JhbFwiO1xuXG5pbXBvcnQgKiBhcyBpbnRlcmZhY2VzIGZyb20gXCIuL3NtYXJ0Y2xpLmludGVyZmFjZXNcIlxuaW1wb3J0ICogYXMgcGx1Z2lucyBmcm9tIFwiLi9zbWFydGNsaS5wbHVnaW5zXCJcbmltcG9ydCAqIGFzIFNtYXJ0Y2xpQ2hlY2tzIGZyb20gXCIuL3NtYXJ0Y2xpLmNoZWNrc1wiO1xuaW1wb3J0ICogYXMgU21hcnRjbGlHZXR0ZXJzIGZyb20gXCIuL3NtYXJ0Y2xpLmdldHRlcnNcIjtcbmltcG9ydCAqIGFzIFNtYXJ0Y2xpSW50ZXJhY3Rpb25zIGZyb20gXCIuL3NtYXJ0Y2xpLmludGVyYWN0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBTbWFydGNsaSB7XG4gICAgcXVlc3Rpb25zRG9uZTtcbiAgICBjb21tYW5kczppbnRlcmZhY2VzLkNsaUNvbW1hbmRbXTtcbiAgICBxdWVzdGlvbnM7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5xdWVzdGlvbnNEb25lID0gcGx1Z2lucy5xLmRlZmVyKCk7XG4gICAgfVxuICAgIGFkZENvbW1hbmQoZGVmaW5pdGlvbkFyZzp7Y29tbWFuZE5hbWU6c3RyaW5nfSl7XG4gICAgICAgIGxldCBkb25lID0gcGx1Z2lucy5xLmRlZmVyKCk7XG4gICAgICAgIGlmIChwbHVnaW5zLmFyZ3YuXy5pbmRleE9mKGRlZmluaXRpb25BcmcuY29tbWFuZE5hbWUpID09IDApIHtcbiAgICAgICAgICAgIGRvbmUucmVzb2x2ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRvbmUucmVqZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRvbmUucHJvbXNpc2U7XG4gICAgfTtcbiAgICBhZGRRdWVzdGlvbihkZWZpbml0aW9uQXJnOntxdWVzdGlvblN0cmluZzpzdHJpbmcscXVlc3Rpb25UeXBlOnN0cmluZ30pe1xuICAgICAgICBcbiAgICB9O1xuICAgIGFkZFZlcnNpb24odmVyc2lvbkFyZzpzdHJpbmcpe1xuXG4gICAgfVxuICAgIHN0YXJ0UGFyc2UoKXtcblxuICAgIH1cblxufSJdfQ==
