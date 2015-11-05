/// <reference path="./index.ts" />

module smartcliPlugins {
    var plugins:any = {};
    export function init() {
        plugins.path = require("path");
        plugins.beautylog = require("beautylog")("os");
        plugins.cliff = require("cliff");
        plugins.inquirer = require("inquirer");
        plugins.smartparam = require("smartparam");
        plugins.argv = require('yargs').argv;
        return plugins;
    }
}