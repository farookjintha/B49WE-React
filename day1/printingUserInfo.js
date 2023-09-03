const User = require("./class");
const { myValue, myFunc } = require("./exports");

const myNewObj = new User("Preeti", "preeti@gmail.com", "Doctor");

const userEmail = myNewObj.getEmail();
console.log("Email: ", userEmail);

console.log("My Value: ", myValue);

myFunc();
