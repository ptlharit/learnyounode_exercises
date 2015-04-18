var fs = require('fs');
var contents = fs.readFileSync(process.argv[2]).toString().split('\n');

var lineNum = contents.length-1;
console.log(lineNum);
