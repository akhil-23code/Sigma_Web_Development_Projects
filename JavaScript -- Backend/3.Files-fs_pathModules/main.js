//fs is a inbuilt package for working on with the Files
const fs = require("fs")
// const fs = require(fs/promises)

// console.log(fs);
console.log("starting");

//doesn't go with the javascript asynchronous nature
// fs.writeFileSync("akhil2.txt","Akhil is the creator of this txt2 file")


//realLife callback hell  - callbackHELL.js
fs.writeFile("akhil2.txt","Akhil is the creator of this txt2 file",()=>{
    console.log("done");
    fs.readFile("akhil2.txt",(error,data)=>{
        console.log(error,data);
        console.log(error,data.toString());
    })
})
// fs.readFile("akhil2.txt",(error,data)=>{
//     console.log(error,data);
//     console.log(error,data.toString());
// })


//returns a undefined but you can see the output in the file
fs.appendFile("akhil.txt"," and the great coder.",(e,d)=>{
    console.log(d);
})

console.log("ending");