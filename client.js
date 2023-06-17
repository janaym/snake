const net = require("net");
const { IP, PORT } = require('./constants');

//establish a connection object to game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  //confirm connection to user
  conn.on('connect', () => {
    console.log("Successfuly connected to game server");
  });

  //log all messages from server
  conn.on('data', (message) => {
    console.log(message);
  });

  //set username to initials
  conn.write('Name: JFM');

  return conn;
};

module.exports = { connect };