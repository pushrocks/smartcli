# smartcli
nodejs wrapper for CLI related tasks. TypeScript ready.

## Status
[![Build Status](https://travis-ci.org/pushrocks/smartcli.svg?branch=master)](https://travis-ci.org/pushrocks/smartcli)
[![Dependency Status](https://david-dm.org/pushrocks/smartcli.svg)](https://david-dm.org/pushrocks/smartcli)
[![bitHound Overall Score](https://www.bithound.io/github/pushrocks/smartcli/badges/score.svg)](https://www.bithound.io/github/pushrocks/smartcli)
[![bitHound Code](https://www.bithound.io/github/pushrocks/smartcli/badges/code.svg)](https://www.bithound.io/github/pushrocks/smartcli)

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