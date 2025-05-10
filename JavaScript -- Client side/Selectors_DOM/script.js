console.log("Harry")

//access 3rd eleement of the box class  --  CLASS Selector
/*
let name = document.getElementsByClassName("box")
console.log(name[2])   
name[2].style.backgroundColor = "white"
*/


//ID Selector
/*
let cool = document.getElementById("myID")
cool.style.backgroundColor = "yellowgreen"
*/


//Query Selector --- only selects the "phela" element of the box class.
// document.querySelector(".box").style.backgroundColor = "purple";
//for all elements -- using for loop

// returns NodeList
console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach( e =>{
    e.style.backgroundColor = "pink"
})



//select by tag name
console.log(document.getElementsByTagName("div"))



//matches
let e = document.querySelectorAll(".box")
console.log(e)
console.log(e[4].matches("#myID"))

//closest
console.log(e[0].closest(".container"))

//contains
let c = document.querySelector(".container")
console.log(c.contains("e[2]"))