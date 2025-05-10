async function sleep() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(455)
        }, 1000);
    })
}

//error because await is not in async function
//let a = await sleep()

(async function main(){
    let a = await sleep();
    console.log(a);
})()

//the function is immediately invoked



//if IIFE is used always the above statement and below statement from the IIFE shud be semi-colon-ed
//also use semi-colon -> when using 2 IIFEs simultaneously
// 1. after the 1st IIFE and before the second IIFE [V.V.V IMP]
//example in Hoisting.js script