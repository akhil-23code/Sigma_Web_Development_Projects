document.body.style.backgroundColor = "black"


//lecture starts



//.then
/*
function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(455)
        }, 3500);
    })
}

console.log("Loading modules");
console.log("Do something else");
console.log("Load Data");
let data = getData()
data.then((v)=>{

console.log(data);

console.log("process data");

console.log("task2");
})*/






/*
//[IMP]
//await -- await lagane k liye muje code snippet ko async (main) function mai wrap karna hoga
//[IMP] but when you are in a module the you can use the await directly -- ex: JS-backend - files fs
//ek async func ka call async func se hi ho dakta hai
async function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("akhil")
        }, 3500);
    })
}

async function main() {
    
    console.log("Loading modules");
    console.log("Do something else");
    console.log("Load Data");
    let data = await getData()
    
    console.log(data);
    
    console.log("process data");
    
    console.log("task2");
}
main();
*/



// settle means resolve or reject
// resolve means promise has settked successfully
// reject means promise has not settled successfully



//fetchAPI
//free fake restAPI -- json Placeholder
//await lagane k liye muje async func mai wrap karna hoga
//fetchAPI ko 2Baar await karna hoga -- 1.promise ko wait karwane 2.json mai parse karne
async function getData() {
    //x will return a promise
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // x.json -- means muje x ko read karna hai json file main -- json file mai parse hoga mera x
    let data = await x.json
    console.log(data);
    //parse in text
    let data2 = await x.text
    console.log(data2);
    
}

async function main() {
    
    console.log("Loading modules");
    console.log("Do something else");
    console.log("Load Data");
    let data = await getData()
    
    console.log(data);
    
    console.log("process data");
    
    console.log("task2");
}
main();