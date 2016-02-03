var http = require('http');
var GOODPORT = 7000;
var BADPORT = 7500;


var niceThings = ["another nice thing", "hello there", "<insert something nice>"];
var badThings = ["your code though, eh!"];

var getRandomItem = function(itemArray){
    var size = itemArray.length;
    var index = Math.floor(Math.random() * size);

    return itemArray[index];
}

// Starting goodServer
var goodServer = http.createServer(function(req, res){
    res.end(getRandomItem(niceThings));
});

goodServer.listen(GOODPORT, function(){
    console.log("server is listening at http://localhost:%s", GOODPORT);
})

// Starting BadServer
var badServer = http.createServer(function(req, res){
    res.end(getRandomItem(badThings));
});

badServer.listen(BADPORT, function(){
    console.log("server is listening at http://localhost:%s", BADPORT);
})