var http = require('http');
var GOODPORT = 7000;
var BADPORT = 7500;


var goodServer = http.createServer(function(req, res){
  res.end("Muy bien! Your sever is running!! :D", GOODPORT);
});

goodServer.listen(GOODPORT, function(){
    console.log("server is listening at http://localhost:%s", GOODPORT);
})

var badServer = http.createServer(function(req, res){
    res.end("Your server's non performant bro " + GOODPORT);
});

badServer.listen(BADPORT, function(){
    console.log("server is listening at http://localhost:%s", BADPORT);
})
