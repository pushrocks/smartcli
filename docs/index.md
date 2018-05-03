# smartcli

nodejs wrapper for CLI related tasks

## Availabililty

[![npm](https://pushrocks.gitlab.io/assets/repo-button-npm.svg)](https://www.npmjs.com/package/smartcli)
[![git](https://pushrocks.gitlab.io/assets/repo-button-git.svg)](https://GitLab.com/pushrocks/smartcli)
[![git](https://pushrocks.gitlab.io/assets/repo-button-mirror.svg)](https://github.com/pushrocks/smartcli)
[![docs](https://pushrocks.gitlab.io/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/smartcli/)

## Status for master

[![build status](https://GitLab.com/pushrocks/smartcli/badges/master/build.svg)](https://GitLab.com/pushrocks/smartcli/commits/master)
[![coverage report](https://GitLab.com/pushrocks/smartcli/badges/master/coverage.svg)](https://GitLab.com/pushrocks/smartcli/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/smartcli.svg)](https://www.npmjs.com/package/smartcli)
[![Dependency Status](https://david-dm.org/pushrocks/smartcli.svg)](https://david-dm.org/pushrocks/smartcli)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/smartcli/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/smartcli/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/smartcli/badges/code.svg)](https://www.bithound.io/github/pushrocks/smartcli)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage

this plugin tries to establish some logic in which CLI tools work.

take the following commandline input:

```
mytool command argument1 argument2 --option1 -o2 option2Value
```

* `mytool` obviously is the tool (like git)
* `command` is the main thing the tool shall do (like commit)
* `argument1` and `argument2` are arguments
* `option1` is a longform option you can add (like --message for message)
* `optionValue` is the referenced option value (like a commit message)

When there is no command and no option specified the standardTask applied.
When there is a option specified but no command, standardTask applies,
except when of the options is -v, --version or --help.

```javascript
import { Smartcli } from 'smartcli';
mySmartcli = new Smartcli();
mySmartcli.standardTask().then(argvArg => {
  // do something if program is called without an command
});

mySmartcli.addCommand({ commandname: 'install' }).then(argvArg => {
  // do something if program is called with command "install"
});

mySmartcli.addVersion('1.0.0'); // -v and --version options will display the specified version in the terminal

mySmartCli.addHelp({
  // is triggered by help command and --help option
  helpText: 'some help text to print' // the helpText to display
});

mySmartcli.startParse(); // starts the evaluation and fullfills or rejects promises.
```

For further information read the linked docs at the top of this README.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
> | By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy.html)

[![repo-footer](https://pushrocks.gitlab.io/assets/repo-footer.svg)](https://push.rocks)
