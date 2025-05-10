console.log("This is Promises");

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was suppoting you")
    }
    else {
        setTimeout(() => {
            console.log("Yes Iam done");
            resolve("harry")
        }, 3000);
    }
})
// a is the value that is being assigned from the returned value of resolve
prom1.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
})

//Promises chaining -- notes
//promise api -- next scropt lo chala ja