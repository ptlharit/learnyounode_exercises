var http = require('http');

var urls = [process.argv[2],process.argv[3],process.argv[4]];
var result;
var results = [];
var count = 0;

getData(urls[0],function() {
	getData(urls[1],function(){
		getData(urls[2])
	})
})

function getData(url,callback){
	http.get(url,function (response){
                result = '';
		response.setEncoding('utf8');
                response.on('data', function (data){
                        result = result + data;
		})
		response.on('end', function (){
			results.push(result); 
			console.log(result);
                        if(callback){
                                callback();

			}
		})
	});
}





