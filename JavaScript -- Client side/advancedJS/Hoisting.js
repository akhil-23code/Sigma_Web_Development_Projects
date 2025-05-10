//hoisting is only for var 
//not for let and const

//hoists the undefined var to the top of the "block"


//error

/*console.log(a1);*/


(function() {
//only a1 = undefined hoisted not he 6 value    
//no error
    console.log(a1);
    var a1=6;
})();


//functions and expressions and classes are not hoisted


(function runs() {
    console.log("IIFE running");
})()