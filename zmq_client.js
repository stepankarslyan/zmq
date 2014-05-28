var zmq = require("zmq");
var requester = zmq.socket("req");

requester.connect("tcp://localhost:3000");
console.log("Connecting to the server...");


for(var i = 0; i < 10; i++) {
  requester.send("How are you?");
}

var x = 1;
requester.on("message", function(reply) {
  
  console.log("Your message " + "[", reply.toString(),  "]" + "at" + new Date());
  x += 1;
  if (x === 10) {
    requester.close();
    process.exit();
  }  
  
});


process.on("SIGNIT" , function() {
  requester.close();
});
