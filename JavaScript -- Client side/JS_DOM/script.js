console.log("Hello world")

console.log(document.body.childNodes)
//second childNode == div.box
console.log(document.body.childNodes[1])

let cont = document.body.firstChild
console.log(cont)

let cont1 = document.body.firstElementChild
console.log(cont1)

console.log(document.body.lastElementChild)

console.log(document.body.firstElementChild.firstElementChild)
document.body.firstElementChild.firstElementChild.style.color = "green"
document.body.firstElementChild.firstElementChild.style.backgroundColor = "red"

//childNodes -- all the nodes 
//children -- elements only [div.box * 5]
console.log(document.body.firstElementChild.children)

console.log(document.body.firstElementChild.lastElementChild.parentElement)

console.log(document.body.firstElementChild.children[3].nextSibling)
console.log(document.body.firstElementChild.children[3].nextElementSibling)
console.log(document.body.firstElementChild.children[3].previousElementSibling)
console.log(document.body.firstElementChild.children[3].previousSibling)



//table target
console.log(document.body.children)
console.log(document.body.children[1])
console.log(document.body.children[1].rows)
