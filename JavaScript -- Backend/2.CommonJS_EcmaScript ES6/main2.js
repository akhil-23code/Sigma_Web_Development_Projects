//commonjs script
//remember to delete "type":"module", from package.json

const a = require("./myserver2")
console.log(a);

console.log(a,__dirname,__filename);

//auto func by js
// (function(exports,require,module,__filename,__dirname) {
//     //modlue code lives here
// });