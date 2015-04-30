var fs = require('fs');

module.exports = function(filepath, type, callback){

fs.readdir(filepath, function(err, list){
        if(err)
	   return callback(err)
	
	list.forEach(function(file){
                var file_type = file.split('.')[1];
                if(file_type == type){
                        console.log(file);
                }
        });
	
	
});

}
