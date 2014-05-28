var zmq = require("zmq");
var requester = zmq.socket("req");
requester.connect("tcp://localhost:5552");

requester.on("message", function(reply) {
  consloe.log("data");
});

process.on("SIGINT", function() {
  requster.close();
});
