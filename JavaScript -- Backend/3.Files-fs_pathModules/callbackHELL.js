// fs.writeFile("akhil2.txt","Akhil is the creator of this txt2 file",()=>{
//     console.log("done");
//     fs.readFile("akhil2.txt",(error,data)=>{
//         console.log(error,data);
//         console.log(error,data.toString());
//         //again
//         fs.writeFile("akhil2.txt","Akhil is the creator of this txt2 file",()=>{
//             console.log("done");
//             fs.readFile("akhil2.txt",(error,data)=>{
//                 console.log(error,data);
//                 console.log(error,data.toString());
//                 //again
//                 fs.writeFile("akhil2.txt","Akhil is the creator of this txt2 file",()=>{
//                     console.log("done");
//                     fs.readFile("akhil2.txt",(error,data)=>{
//                         console.log(error,data);
//                         console.log(error,data.toString());
//                         //again
//                     })
//                 })                
//             })
//         })        
//     })
// })


//promises primary purpose isto solve this hell
import fs from "fs/promises" //fs/promises always provide non sync mthds--good for async nature

// console.log(fs);
let a = await fs.readFile("akhil.txt")
console.log(a.toString());

let b = await fs.appendFile("akhil2.txt","\n\n\nhello")

