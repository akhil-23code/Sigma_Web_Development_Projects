let a = prompt("enter a number1: ")
let b = prompt("enter a number2: ")
// a & b are strings
let sum = a+b
console.log("the sum is: ",sum);

// in  prompt give a = harry , b = akhil
// a + b = NaN

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}

let sum1 = parseInt(a) + parseInt(b)
console.log(sum1);


// x = not defined
//try-catch are asnc function
function foo(){
    let x=1;
    try{
        console.log("the sum is : ",sum*x);
        return true;
    }catch(error){
        console.log("Error aa gaya bhai");
        return false;
    }finally{
        console.log("finally is used to clean_UPS");
        console.log("files are being closed and db are being closed");
    }
}
foo()