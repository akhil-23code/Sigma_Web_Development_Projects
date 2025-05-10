//  M D N reference is important
document.title = "Events"


let varia = document.getElementById("btn")

/*varia.addEventListener("click",()=>{
    varia.style.backgroundColor = "red"
    alert("i was clicked")
})*/


/*varia.addEventListener("dblclick",()=>{
    varia.style.backgroundColor = "green"
    alert("i was dbl clicked")
})*/


/*varia.addEventListener("mouseenter",()=>{
    varia.style.backgroundColor = "blue"
})
varia.addEventListener("mouseleave",()=>{
    varia.style.backgroundColor = "pink"
})*/


//right click
/*varia.addEventListener("contextmenu",()=>{
    document.querySelector(".box").innerText = "Happy"
})*/


document.addEventListener("keydown",(e)=>{
    console.log(e.key,e.keycode)
})