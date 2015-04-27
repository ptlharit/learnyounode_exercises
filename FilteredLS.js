var fs = require('fs');

var filepath = process.argv[2];
var type = process.argv[3];

fs.readdir(filepath, function callback(err, list){
	list.forEach(function(file){
		var file_type = file.split('.')[1];
		if(file_type == type){
			console.log(file);
		}
	});
});
