// Stores the active TCP connection object.
let connection;
const { wasdMap, keystrokeMessages} = require('./constants');

//sets up the user's keyboard interface
const setupInput = function(conn) {
  connection = conn;

  //setup
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  //when receiving data from user, send to input handler
  stdin.on('data', handleUserInput);

  return stdin;
};


//defines special keystrokes
const handleUserInput = function(key) {
  //exits process upon ctrl-c key
  if (key === '\u0003') {
    process.exit();
  }

  //assign movement to wasd keys
  // const wasdMap = {
  //   w: "Move: up",
  //   a: "Move: left",
  //   s: "Move: down",
  //   d: "Move: right"
  // };

  if (wasdMap[key]) {
    connection.write(wasdMap[key]);
  }

  //special keystroke messages
  // const keystrokeMessages = {
  //   g: "Say: good game!",
  //   f: "Say: Paying my respects",
  //   r: "Say: ripperoni"
  // };

  if (keystrokeMessages[key]) {
    connection.write(keystrokeMessages[key]);
  }
};

module.exports = { setupInput };