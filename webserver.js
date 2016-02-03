var http + require("http");
var PORT = 8080;

var server + http.createServer(handleRequest(req, res){
  res.write("Sever is running!");

  setTimeout(function){
  res.end;
 },  5000);

 }) ;

server.listen(PORT, function() {
  console.log("Server is listening on http://localhost:%", PORT);
});