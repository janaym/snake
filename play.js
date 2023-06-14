const net = require("net");
const connect = require('./client.js')

// // establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: 'localhost',
//     port: 50541
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");


//   conn.on('data', (message) => {
//     console.log(message);
//   });

//   return conn;
// };



console.log("Connecting ...");

connect();