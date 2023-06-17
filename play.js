const { connect } = require("./client");
const { setupInput } = require("./input");

//establish connection
console.log("Connecting ...");
let connection = connect();

//let's get started!
setupInput(connection);

