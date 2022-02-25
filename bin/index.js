#!/usr/bin/env node
var child_process=require("child_process");
const os = require('os');
var path = require('path')
var argv = require('minimist')(process.argv.slice(2));
var sourceDir = argv._[0] || ""
var targetDir = argv._[1] || ""
if (os.type() == 'Windows_NT') {
    //windows
    child_process.execSync('start ' + path.resolve(__dirname + `/watch.exe ${sourceDir} ${targetDir}`))
} else {
    child_process.execSync(path.resolve(__dirname + `/watch ${sourceDir} ${targetDir}`))
}