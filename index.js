//dependancies
const cTable = require("console.table");
// const inquirer = require("inquirer");

//figlet fun
const figlet = require("figlet");

//console.log to see if figlet connected
figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
