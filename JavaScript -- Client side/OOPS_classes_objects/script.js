//Prototypes -- oops ka chota bhai
let obj={
    "a":1,
    "b":"harry"    
}
console.log(obj);
//returns undefined
console.log(obj.eats);


let animal ={
    "eats":true
}
obj.__proto__=animal;
console.log(obj.eats);

let rabbit={
    jumps:true
}
rabbit.__proto__=animal; //sets rabbit.[[Prototype]] = animal
console.log(rabbit.eats);
console.log(rabbit.jumps);

//ek obj dusre obj ko inherit kar raha hai -- prototypic oops








//OOPS
class Animal {
    constructor(name){
        this.happ = name;
        console.log("object is created...");
    }

    Eats(){
        console.log("kha raha hu ");
    }
    Jumpss(){
        console.log("kuud raha hu ");
    }
}
let a =new Animal("bunny");
console.log(a);
console.log(a.happ);

console.log(a.Eats());



//one at a time runs.....->->

//snippet 1
/*
class Lion extends Animal{
    Roar(){
        console.log("Main hoon LION");
    }
}

let b = new Lion("Shera");
console.log(b);
//when clog(b) i got object is created because b initiates the constructor for the Lion class
console.log(b.Eats());
console.log(b.Roar());
*/


//snippet 2
// to change the Lion class constructor -- 
// 1. create Lion constructor
// 2. until now it gives error:: so u need to call Animal class constructor first using hte "super" keyword
class Lion extends Animal{
    constructor(name){
        super(name)
        this.sad = name
        console.log("object is created and The name is King");
    }
    Roar(){
        console.log("Main hoon Lion");
    }
    //overRiding
    Eats(){
        //super keyword
        super.Eats()
        console.log("non-veg Time");
    }
}
let b = new Lion("Shera");
console.log(b);
console.log(b.Eats());
console.log(b.Roar());





//static mtds
//not available to the objs 
//available as a whole
class Employee{
    static mtd(){
        console.log("hi");
    }
}
let fun = new Employee();
//error because objs cannot access the static mtds
//console.log(fun.mtd());
Employee.mtd()





//is instance of
console.log(a instanceof Animal)
console.log(a instanceof Lion)