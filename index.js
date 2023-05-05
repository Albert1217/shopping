// Module package CORE
// setTimeout(function() {
// console.log('ishga tushdi');
// }, 5000);

// let number = 0;
// setInterval(function () {
//   console.log("hisoblar", number);
//   number++;
// }, 1100);

const fs = require("fs");
const { networkInterfaces } = require("os");
const data = fs.readFileSync("./input.text", "utf8");
console.log(data);

console.log("*************");

fs.writeFileSync("./input.txt", `${data} \n\t\t by BekzodAli`);
const new_data = fs.readFileSync("./input.txt", "utf8");
console.log;
new_data;

// Module package EXTERNAL
// Module package FILE
