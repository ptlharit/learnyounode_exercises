var fs = require('fs');

var filename = process.argv[2];

file = fs.readFile(filename, function(err, fileContent){
  console.log(fileContent.toString().split('\n').length - 1);
});
