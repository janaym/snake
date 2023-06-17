const IP = 'localhost';
const PORT = '50541';

//key movement maps
const wasdMap = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right"
};

//special message key maps
const keystrokeMessages = {
  g: "Say: good game!",
  f: "Say: Paying my respects",
  r: "Say: ripperoni",
  k: "Say: ssssssssssss"
};


module.exports = {
  IP,
  PORT,
  wasdMap,
  keystrokeMessages
};



