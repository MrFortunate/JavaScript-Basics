var Niraj={};
Niraj.http = require('http');
Niraj.fs=require('fs');
Niraj.http.createServer(
    function (request,response){
        response.writeHead(200,{'Content-Type':'text/html'});//specifying the file type and 200 is code which means OK
        response.end(Niraj.fs.readFileSync("../chessboard.html"));//actual file to be loaded via given address
    }
).listen(1337,'127.0.0.1');

Niraj.eventEmitter =require("events");
Niraj.em1=new Niraj.eventEmitter();
Niraj.em1.on('overflow',()=>{
    console.log("Cool is that");
});

Niraj.em1.emit('overflow');

Niraj.em1.on('underflow',function(a,b){
   console.log(a, b, this); 
});

Niraj.em1.emit('underflow',5,6);