function sum(a,b,c){
    return a+b+c;
}
let arr = [1,5,2]
console.log("sum is:",arr[0]+arr[1]+arr[2]);
console.log("sum is:",sum(arr[0],arr[1],arr[2]));

//spread operator -- khol do arr ko
console.log("the sum is: ",sum(...arr));

//(...arr)  -> available as index:value pair
// {0:1,1:5,2:2}