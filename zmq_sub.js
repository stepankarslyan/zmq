var zmq = require("zmq");

var subscriber = zmq.socket("sub");
subscriber.connect("tcp://localhost:3030");
subscriber.subscribe("");
console.log("Connection to the localhost 3030...");

subscriber.on("message", function(data) {
  console.log(data.toString());
});
