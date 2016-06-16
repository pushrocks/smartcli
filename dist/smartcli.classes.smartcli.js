"use strict";
require("typings-global");
var plugins = require("./smartcli.plugins");
var Smartcli = (function () {
    function Smartcli() {
        this.argv = plugins.argv;
        this.questionsDone = plugins.q.defer();
        this.parseStarted = plugins.q.defer();
    }
    Smartcli.prototype.addAlias = function (keyArg, aliasArg) {
        this.argv = this.argv.alias(keyArg, aliasArg);
    };
    ;
    Smartcli.prototype.addCommand = function (definitionArg) {
        var _this = this;
        var done = plugins.q.defer();
        this.parseStarted.promise
            .then(function () {
            if (_this.argv._.indexOf(definitionArg.commandName) == 0) {
                done.resolve(_this.argv);
            }
            else {
                done.reject(_this.argv);
            }
        });
        return done.promsise;
    };
    ;
    Smartcli.prototype.addQuestion = function (definitionArg) {
    };
    ;
    Smartcli.prototype.addHelp = function () {
    };
    Smartcli.prototype.addVersion = function (versionArg) {
        var _this = this;
        this.version = versionArg;
        this.addAlias("v", "version");
        this.parseStarted.promise
            .then(function () {
            if (_this.argv.v) {
                console.log(_this.version);
            }
        });
    };
    Smartcli.prototype.standardTask = function () {
        var _this = this;
        var done = plugins.q.defer();
        this.parseStarted.promise
            .then(function () {
            if (_this.argv._.length == 0 && !_this.argv.v) {
                done.resolve(_this.argv);
            }
            else {
                done.reject(_this.argv);
            }
            ;
        });
        return done.promise;
    };
    Smartcli.prototype.startParse = function () {
        this.argv = this.argv.argv;
        this.parseStarted.resolve();
    };
    return Smartcli;
}());
exports.Smartcli = Smartcli;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0Y2xpLmNsYXNzZXMuc21hcnRjbGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sZ0JBQWdCLENBQUMsQ0FBQTtBQUV4QixJQUFZLE9BQU8sV0FBTSxvQkFBb0IsQ0FBQyxDQUFBO0FBRzlDO0lBT0k7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBQ0QsMkJBQVEsR0FBUixVQUFTLE1BQU0sRUFBQyxRQUFRO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7O0lBQ0QsNkJBQVUsR0FBVixVQUFXLGFBQWtDO1FBQTdDLGlCQVdDO1FBVkcsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87YUFDcEIsSUFBSSxDQUFDO1lBQ0YsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0IsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQzs7SUFDRCw4QkFBVyxHQUFYLFVBQVksYUFBeUQ7SUFFckUsQ0FBQzs7SUFDRCwwQkFBTyxHQUFQO0lBRUEsQ0FBQztJQUNELDZCQUFVLEdBQVYsVUFBVyxVQUFpQjtRQUE1QixpQkFTQztRQVJHLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTzthQUNwQixJQUFJLENBQUM7WUFDRixFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQUNELCtCQUFZLEdBQVo7UUFBQSxpQkFXQztRQVZHLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPO2FBQ3BCLElBQUksQ0FBQztZQUNGLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQixDQUFDO1lBQUEsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUNELDZCQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVMLGVBQUM7QUFBRCxDQTVEQSxBQTREQyxJQUFBO0FBNURZLGdCQUFRLFdBNERwQixDQUFBIiwiZmlsZSI6InNtYXJ0Y2xpLmNsYXNzZXMuc21hcnRjbGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJ0eXBpbmdzLWdsb2JhbFwiO1xuXG5pbXBvcnQgKiBhcyBwbHVnaW5zIGZyb20gXCIuL3NtYXJ0Y2xpLnBsdWdpbnNcIjtcbmltcG9ydCB7UXVlc3Rpb259IGZyb20gXCIuL3NtYXJ0Y2xpLmNsYXNzZXMuaW50ZXJhY3Rpb25cIjtcblxuZXhwb3J0IGNsYXNzIFNtYXJ0Y2xpIHtcbiAgICBhcmd2O1xuICAgIHF1ZXN0aW9uc0RvbmU7XG4gICAgcGFyc2VTdGFydGVkO1xuICAgIGNvbW1hbmRzO1xuICAgIHF1ZXN0aW9ucztcbiAgICB2ZXJzaW9uOnN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmFyZ3YgPSBwbHVnaW5zLmFyZ3Y7XG4gICAgICAgIHRoaXMucXVlc3Rpb25zRG9uZSA9IHBsdWdpbnMucS5kZWZlcigpO1xuICAgICAgICB0aGlzLnBhcnNlU3RhcnRlZCA9IHBsdWdpbnMucS5kZWZlcigpO1xuICAgIH1cbiAgICBhZGRBbGlhcyhrZXlBcmcsYWxpYXNBcmcpe1xuICAgICAgICB0aGlzLmFyZ3YgPSB0aGlzLmFyZ3YuYWxpYXMoa2V5QXJnLGFsaWFzQXJnKTtcbiAgICB9O1xuICAgIGFkZENvbW1hbmQoZGVmaW5pdGlvbkFyZzp7Y29tbWFuZE5hbWU6c3RyaW5nfSl7XG4gICAgICAgIGxldCBkb25lID0gcGx1Z2lucy5xLmRlZmVyKCk7XG4gICAgICAgIHRoaXMucGFyc2VTdGFydGVkLnByb21pc2VcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hcmd2Ll8uaW5kZXhPZihkZWZpbml0aW9uQXJnLmNvbW1hbmROYW1lKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbmUucmVzb2x2ZSh0aGlzLmFyZ3YpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbmUucmVqZWN0KHRoaXMuYXJndik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkb25lLnByb21zaXNlO1xuICAgIH07XG4gICAgYWRkUXVlc3Rpb24oZGVmaW5pdGlvbkFyZzp7cXVlc3Rpb25TdHJpbmc6c3RyaW5nLHF1ZXN0aW9uVHlwZTpzdHJpbmd9KXtcbiAgICAgICAgXG4gICAgfTtcbiAgICBhZGRIZWxwKCl7XG5cbiAgICB9XG4gICAgYWRkVmVyc2lvbih2ZXJzaW9uQXJnOnN0cmluZyl7XG4gICAgICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb25Bcmc7XG4gICAgICAgIHRoaXMuYWRkQWxpYXMoXCJ2XCIsXCJ2ZXJzaW9uXCIpO1xuICAgICAgICB0aGlzLnBhcnNlU3RhcnRlZC5wcm9taXNlXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5hcmd2LnYpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnZlcnNpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgfVxuICAgIHN0YW5kYXJkVGFzaygpe1xuICAgICAgICBsZXQgZG9uZSA9IHBsdWdpbnMucS5kZWZlcigpO1xuICAgICAgICB0aGlzLnBhcnNlU3RhcnRlZC5wcm9taXNlXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5hcmd2Ll8ubGVuZ3RoID09IDAgJiYgIXRoaXMuYXJndi52KXtcbiAgICAgICAgICAgICAgICAgICAgZG9uZS5yZXNvbHZlKHRoaXMuYXJndik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZG9uZS5yZWplY3QodGhpcy5hcmd2KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkb25lLnByb21pc2U7XG4gICAgfVxuICAgIHN0YXJ0UGFyc2UoKXtcbiAgICAgICAgdGhpcy5hcmd2ID0gdGhpcy5hcmd2LmFyZ3Y7XG4gICAgICAgIHRoaXMucGFyc2VTdGFydGVkLnJlc29sdmUoKTtcbiAgICB9XG5cbn0iXX0=
