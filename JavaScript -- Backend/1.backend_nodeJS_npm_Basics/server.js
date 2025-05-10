console.log("Hello World");
//to run: node ./server.js


//slugify example
var slugify = require('slugify')
let a = slugify('some string') //adds -
console.log(a);
let b = slugify('some string/%$&','_')
console.log(b);