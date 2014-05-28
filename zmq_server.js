var zmq = require("zmq");
var responder = zmq.socket("rep");
responder.bind("tcp://*:3000");

responder.on("message", function(request) {
  var x = 0;
  console.log("Recieving requests:" + "" + x + request.toString() + new Date());
  x += 1;
  
  if (x === 4) {
    responder.send("Are you crazy?");
    responder.close();
  }
});
