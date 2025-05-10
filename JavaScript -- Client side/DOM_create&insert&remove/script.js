document.body.style.margin = "0px";
document.body.style.padding = "0px";

console.log(document.querySelector(".container").innerHTML)
console.log(document.querySelector(".container").innerText)

console.log(document.querySelector(".container").outerHTML)

console.log(document.querySelector(".container").tagName)
console.log(document.querySelector(".container").nodeName)
console.log(document.querySelector(".container").nodeType)

document.querySelector(".box").style.backgroundColor = "red"
console.log(document.querySelector(".box").innerHTML)

//inline css : hidden
//document.querySelector(".container").hidden = "true"

document.querySelector(".box").innerHTML = "Hello"


console.log(document.querySelector(".box").hasAttribute("style"))
console.log(document.querySelector(".box").getAttribute("style"))
//you cannot put multiple style at once, EXAMPLE: next 2lines;;  turn one the coments from th next 2lines
// document.querySelector(".box").setAttribute("style", "background-color:yellow")
// document.querySelector(".box").setAttribute("style","display: inline")


console.log(document.querySelector(".box").attributes)
// console.log(document.querySelector(".box").removeAttribute("style"))



// VVV IMP -- documnet.designMode = "on"



console.log(document.querySelector(".box").dataset)
document.querySelector(".box").setAttribute("data-hostedBy","Safari")
console.log(document.querySelector(".box").dataset)



//INSERTION Methods
let varia = document.createElement("span")
varia.setAttribute("class","created")
varia.innerHTML = "I am a <b>span</b>"
//now the element is created but not inserted

document.querySelector(".container").append(varia)
// document.querySelector(".container").prepend(varia)
// document.querySelector(".container").before(varia)
// document.querySelector(".container").after(varia)

//upar case and neeche case are both the same

let cont = document.querySelector(".container")
cont.insertAdjacentHTML("afterend","<b>Hello i'm inserted dynamically</b>")
// cont.insertAdjacentHTML("beforeend","<b>Hello i'm inserted dynamically</b>")
// cont.insertAdjacentHTML("afterbegin","<b>Hello i'm inserted dynamically</b>")
// cont.insertAdjacentHTML("beforebegin","<b>Hello i'm inserted dynamically</b>")




// document.querySelector(".box").remove()


console.log(document.querySelector(".container").classList)
console.log(document.querySelector(".container").className)

document.querySelector(".container").classList.add("akhil")
console.log(document.querySelector(".container").className)

document.querySelector(".container").classList.remove("red")
console.log(document.querySelector(".container").className)

//false
document.querySelector(".container").classList.toggle("akhil")
//true
document.querySelector(".container").classList.toggle("akhil")
