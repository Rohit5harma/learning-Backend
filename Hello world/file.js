const fs = require("fs");


//sync......
// fs.writeFileSync("./test.txt", "Hello world");


//Async 
fs.write("./test.txt","hello world async", (err) => {});