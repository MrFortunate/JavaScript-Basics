var rpise={};
rpise.http=require('http');
rpise.fs=require('fs');
rpise.http.createServer(
    function(request,response){
        response.writeHead(200,{'Content-type':'text/html'});
        response.end(rpise.fs.readFileSync("./index.html"));
      
    }).listen(8081,'127.0.0.1');
