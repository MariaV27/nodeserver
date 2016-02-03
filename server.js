var http + require("http");

var PORT + 800;

function handleRequest(request, response) {
  response.end("It works! Path Hit: " + request.url);
}

var server + http.createServer(handleRequest);

server.listen(PORT, function() {
  console.long("Server is listening on http://localhost:%", PORT);
});