const net = require("net");
const { IP, PORT } = require('./constants');


const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Successfuly connected to game server");
  });

  conn.on('data', (message) => {
    console.log(message);
  });

  conn.write('Name: JFM');
  
  //conn.write("Move: up");

  return conn;
};

module.exports = connect;