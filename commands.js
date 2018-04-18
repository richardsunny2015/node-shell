var fs = require('fs');
var request = require('request');
module.exports = {
  pwd: function() {
    process.stdout.write(process.env.PWD);
    process.stdout.write('\nprompt > ');
  },
  date: function() {
    let today = new Date();
    process.stdout.write(today.toGMTString());
    process.stdout.write('\nprompt > ');
  },
  cat: function(cmd) {
    let fileName = cmd.split(' ')[1];
    // console.log(fileName);
    fs.readFile(fileName, 'utf8', function(err, data) {
      if (err) {
        process.stdout.write(err);
      } else {
        process.stdout.write(data);
      }
      process.stdout.write('\nprompt > ');
    });
  },
  head: function(cmd) {
    let fileName = cmd.split(' ')[1];
    fs.readFile(fileName, 'utf8', function(err, data) {
      if (err) {
        process.stdout.write(err);
      } else {
        let lines = data.split('\n').slice(0,10).join('\n');
        process.stdout.write(lines);
      }
      process.stdout.write('\nprompt > ');
    })
  },
  ls: function() {
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + '\n');
      })
      process.stdout.write('prompt > ');
    })
  },
  echo: function(cmd) {
    process.stdout.write((cmd.split(' ').slice(1).join(' ')));
    process.stdout.write('\nprompt > ');
  },
  tail:  function(cmd) {
    let fileName = cmd.split(' ')[1];
    fs.readFile(fileName, 'utf8', function(err, data) {
      if (err) {
        process.stdout.write(err);
      } else {
        let lines = data.split('\n').slice(-10).join('\n');
        process.stdout.write(lines);
      }
      process.stdout.write('\nprompt > ');
    })
  },
  sort: function(cmd) {
    let fileName = cmd.split(' ')[1];
    fs.readFile(fileName, 'utf8', function(err, data) {
      if (err) {
        process.stdout.write(err);
      } else {
        let sortedData = data.split('\n').sort(function(a, b) {
          if (a.toLowerCase().trimLeft() < b.toLowerCase().trimLeft()) return -1;
          if (a.toLowerCase().trimLeft() > b.toLowerCase().trimLeft()) return 1;
          return 0;
          // let compA = a.trimLeft().toLowerCase();
          // let compB = b.trimLeft().toLowerCase();
          // return compA.charCodeAt(0) - compB.charCodeAt(0);
        }).join('\n');
        process.stdout.write(sortedData);
      }
      process.stdout.write('\nprompt > ');
    })
  },
  wc: function(cmd) {
    let fileName = cmd.split(' ')[1];
    // console.log(fileName);
    fs.readFile(fileName, 'utf8', function(err, data) {
      if (err) {
        process.stdout.write(err);
      } else {
        let dataLength = data.split('\n').length;
        process.stdout.write(dataLength+'');
      }
      process.stdout.write('\nprompt > ');
    });
  },
  uniq: function(cmd) {
    let fileName = cmd.split(' ')[1];
    // console.log(fileName);
    fs.readFile(fileName, 'utf8', function(err, data) {
      if (err) {
        process.stdout.write(err);
      } else {
        let filteredData = data.split('\n').filter(function(value, index, arr) {
          return arr.indexOf(value) === index;
        }).join('\n');
        process.stdout.write(filteredData);
      }
      process.stdout.write('\nprompt > ');
    });
  },
  curl: function(cmd) {
    let urlName = cmd.split(' ')[1];
    urlName = `https://${urlName}`;
    // request(urlName, function(error, response, body) {
    //   if (error) process.stdout.write(error);
    //   process.stdout.write(response.body);
    // });
    // request.get(urlName).on('response', function(response) {
    //   process.stdout.write(response.body + '');
    // })
      // .on('error', (error) => {if (error) process.stdout.write(error)})
      // .on('response', (response) => process.stdout.write(response.body));

    process.stdout.write('\nprompt > ');
  }
}
