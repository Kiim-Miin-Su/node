const path = require("path");

console.log(__dirname); // absolute path to the directory that contains the current module

console.log(__filename); // absolute path to the current module
// console.log(path.sep); // platform-specific path segment separator
// console.log(path.delimiter); // platform-specific path delimiter

// console.log(path.basename(__filename));// file name
// console.log(path.basename(__filename, ".js"));// file name
// console.log(path.dirname(__filename));// file name
// console.log(path.extname(__filename));// ext_name
