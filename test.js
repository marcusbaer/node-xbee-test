var XBee = require('svd-xbee').XBee;

var xbee = new XBee({
  port: '/dev/ttyUSB0',   // replace with yours
  baudrate: 9600 // 9600 is default
})

// Add Set to your remote node
var robot = xbee.addNode([0x00,0x13,0xa2,0x00,0x40,0x61,0x2f,0xe4]);
//var robot = xbee.addNode([0x00,0x13,0xa2,0x00,0x40,0x61,0xaa,0xe2]);

robot.on("data", function(data) {
  console.log("robot>", data);
  if (data == "ping") robot.send("pong");
});

//robot.send("ATMY\n"); // this way???
