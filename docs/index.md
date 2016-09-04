# smartcli
nodejs wrapper for CLI related tasks. TypeScript ready.

## Availabililty
[![npm](https://push.rocks/assets/repo-button-npm.svg)](https://www.npmjs.com/package/smartcli)
[![git](https://push.rocks/assets/repo-button-git.svg)](https://gitlab.com/pushrocks/smartcli)
[![git](https://push.rocks/assets/repo-button-mirror.svg)](https://github.com/pushrocks/smartcli)
[![docs](https://push.rocks/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/smartcli/docs)

## Status for master
[![build status](https://gitlab.com/pushrocks/smartcli/badges/master/build.svg)](https://gitlab.com/pushrocks/smartcli/commits/master)
[![coverage report](https://gitlab.com/pushrocks/smartcli/badges/master/coverage.svg)](https://gitlab.com/pushrocks/smartcli/commits/master)
[![Dependency Status](https://david-dm.org/pushrocks/smartcli.svg)](https://david-dm.org/pushrocks/smartcli)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/smartcli/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/smartcli/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/smartcli/badges/code.svg)](https://www.bithound.io/github/pushrocks/smartcli)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)

## Install the package
    npm install smartcli --save

## Usage

this plugin tries to establish some logic in which CLI tools work.

take the following commandline input:

```
mytool function argument1 argument2 --option1 -o2 option2Value
```

* 'mytool' obviously is the tool (like git)
* function is the main thing the tool shall do (like commit)
* argument1 and argument2 are arguments
* option1 is a longform option you can add (like --message for message)
* optionValue is the referenced option value (like a commit message)

```typescript
import {Smartcli} from "smartcli"
mySmartcli = new Smartcli();
mySmartcli.standardTask()
  .then(argvArg => {
    // do something if program is called without an command
  });

mySmartcli.question
```