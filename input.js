
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

const handleUserInput = function(key) {
  if(key === '\u0003') {
    process.exit();
  }  

  const wasdMap = {
    w: "Move: up",
    a: "Move: left",
    s: "Move: down",
    d: "Move: right"
  };

  if(wasdMap[key]) {
    console.log(wasdMap[key]);

  }

}

module.exports = setupInput;