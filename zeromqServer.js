var zmq = require("zmq");
console.log("running server!");
var responder = zmq.socket("rep");
responder.bind("tcp://*:5552");
responder.send("Hello you");
process.on("SIGINT", function() {
  responder.close();
});
