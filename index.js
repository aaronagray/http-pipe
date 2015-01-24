#!/usr/bin/env node

var r = require('hyperquest')
var argv = require('minimist')(process.argv.slice(2));

if (argv._.length === 0) {
  console.error(
    '\nhttp-pipe <options> url' +
    '\n\nOptions:\n  -m the HTTP verb to use.\n')
  process.exit(1)
}

process.stdin
  .pipe(r(argv._[0], {method: argv.m || 'POST'}))
  .pipe(process.stdout)
