var fs = require('fs');
var commands = require('./commands.js');
var request = require('request');
process.stdout.write('prompt > ');

process.stdin.on('data', function(data) {
  var input = data.toString().trim().split(' ');
  let cmd = input[0];
  if (commands.hasOwnProperty(cmd)) commands[cmd](input.join(' '));
  else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }


});
