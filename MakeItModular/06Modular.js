var FilterModule = require('./DirFilterModule.js');

var filepath = process.argv[2];
var type = process.argv[3];

FilterModule(filepath,type, function(err, filelist){
	if(err){ return console.error('error', err)}
	
	filelist.forEach(function(file){
		console.log(file);
	})
})
