var net = require('net');

function addZero(i){ 
	if(i<10)
		return '0'+i
	else
		return i;		
}

var server = net.createServer(function (socket){
	var date = new Date(Date.now());
	var time = date.getFullYear()+'-'+addZero(date.getMonth()+1)+'-'+addZero(date.getDate())+' '+addZero(date.getHours())+':'+addZero(date.getMinutes());
	socket.end(time+'\n');
});

server.listen(process.argv[2]);
