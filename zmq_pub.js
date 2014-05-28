var zmq = require("zmq");
var publisher = zmq.socket("pub");
publisher.bind("tcp://*:3030", function(err) {
  if(err)
    console.log(err)
  else
    console.log("Listening on 3030...")
});

setInterval(function() {
  console.log("Sending data to the subscribers...");
  publisher.send(JSON.toString({"name":"Stepan"}));
}, 3000);



process.on('SIGINT', function() {
  publisher.close();
  console.log('\nClosed')
});

