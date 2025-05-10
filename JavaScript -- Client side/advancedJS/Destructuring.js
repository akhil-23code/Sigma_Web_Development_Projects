async function sleep() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(455)
        }, 1000);
    })
}
//destructuring
(async function main(){

//1.    
    // let x,y = [1,5]
    //clog(x,y)  ->  error because x=undefined and y=[1,5]
    let [x,y,...rest] = [1,5,7,8,4,6,3,3,4]
    console.log(x,y,rest);


//2.
    let obj={
        a:1,
        b:2,
        c:3
    }
    //a aur b ko lelo from the obj
    //usage : when obj is large and u need to pull out only few data
    //not a declaration statement
    let {a,b} = obj
    console.log(a,b)
})()

