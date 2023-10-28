const fs = require('fs');
const moment = require('moment');
const file = './file.txt';
fs.watchFile(file, (current, previous) => {
  return console.log(`${file} updated ${(current.mtime)}`);
});
const time = moment().format('MMMMM Do YYYY, h:mm:ss a');
return console.log(`${file} updated ${time}`);