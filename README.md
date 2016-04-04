# smartcli
nodejs wrapper for CLI related tasks

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
mytool function argument1 argument2 --option1 option1Value --option2 option2Value
```

* 'mytool' obviously is the tool (like git)
* function is the main thing the tool shall do (like commit)
* option is an option you can add (like -m for message)
* optionValue is the referenced option value (like a commit message)


### The inner organization of smartcli
**smartcli** exposes three major groups of functions:

* check functions
  * are grouped in **smartcli.checks** object
* get functions
  * are grouped in **smartcli.get** object
* async interaction functions
  * are grouped in **smartcli.interaction** object

```js
var smartcli = require("smartcli");

/* -------------- Check Functions -------------------*/
//returns true for terminal command "node myjs.js jazz"
smartcli.check.command('jazz'); 

/**
* returns an object for terminal command "node myjs.js --myoption something" like so
* {
*   name: 'myoption',
*   specified: true,
*   value: 'something'
* }
*/
smartcli.get.option('myoption');
```

