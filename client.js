const net = require("net");


const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Successfuly connected to game server");
  })

  conn.on('data', (message) => {
    console.log(message);
  });

  conn.write('Name: JFM')

  return conn;
};

module.exports = connect;