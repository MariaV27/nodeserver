var http = require('http');
var PORT = 7000;
var PORT2 = 7500;


var server = http.createServer(function(req, res){
  res.write("sever is running")
}

  setTimeout(function){
  res.end;
 },  7000);

 }) ;

server.listen(PORT, function() {
  console.log("you are doing wonderful today!", PORT);
}

server.listen(PORT2, function) {
  console.log("you are so meh", PORT2);
});