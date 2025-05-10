//asynchronous nature of javascript

console.log("harry is a hacker")
console.log("rohan is a hecker")

// tu time le raha hai hat
setTimeout(() => {
    console.log("I am inside the setTimeout1")
}, 2000);
setTimeout(() => {
    console.log("I am inside the setTimeout2")
}, 0);

console.log("The End")





//Callback func
const callback = (arg) => {
    console.log(arg)
}

const loadScript = (src, callback) =>{
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("harry")
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)

//promises -- next script chala jaa