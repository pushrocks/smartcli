# smartcli
nodejs wrapper for CLI related tasks  
[![Dev Status](https://img.shields.io/badge/DevStatus-Active-green.svg)](https://github.com/pushrocks/smartcli/commits/dev)

### Buildstatus/Dependencies
[![Build Status](https://travis-ci.org/pushrocks/smartcli.svg?branch=master)](https://travis-ci.org/pushrocks/smartcli)
[![devDependency Status](https://david-dm.org/pushrocks/smartcli/dev-status.svg)](https://david-dm.org/pushrocks/smartcli#info=devDependencies)

### Install the package
    npm install smartcli

### Usage
```js
var smartcli = require("smartcli");

//returns true for terminal command "node myjs.js jazz"
smartcli.checkCommand('jazz'); 

/**
* returns an object for terminal command "node myjs.js --myoption something" like so
* {
*   name: 'myoption',
*   specified: true,
*   value: 'something'
* }
*/
smartcli.getOption('myoption');
```

Cheers
Phil from Lossless Digital
