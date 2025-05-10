const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/birds')
const shop = require('./routes/shop')

app.use('/blog', blog)
// V.V.IMP
// url ""ending"" with /blog -- it is handled by birds.js file 
//http://localhost:3000/blog/
app.use('/shop',shop)

// browser search is bydefault get request -- get i.e url has a limit 8192 bytes -- and i cannot send any sort of sensitive info(username,password) in the get request because they may come in the server logs

//post request -- merits: to send big data to the server such as(files , html code,sensitive data) efficiently

//get request can be checked,that it is working on my request or not--- thru browser
app.get('/', (req, res) => {
    console.log("hey its a get request");
    res.send('Hello World!')
})

//post request can be checked but -- postman
//or they html public page

app.use(express.static('public'))

app.post('/', (req, res) => {
    console.log("hey its a post request");
    res.send('Hello World! post')
})
//put req (request) is used to update
app.put('/', (req, res) => {
    console.log("hey its a put request");
    res.send('Hello World! put')
}).delete('/', (req, res) => {
    console.log("hey its a delete request");
    res.send('Hello World! delete')
})




//serving html files from the server 
// create template folder and write the html files

app.get('/aboutus',(req,res)=>{

    /*
    res.sendFile("/template/aboutUs.html")//,{root:__dirname})
     -- error: due to not specification of absolute path or the root file
    */
    res.sendFile("/template/aboutUs.html",{root:__dirname})
    console.log("serving html files");
    //res.send("hello world\n")
})





//read all methods of res.()  they are in the screenshots

//res.json()
app.get('/api',(req,res)=>{
    res.json({a:1 , b:2, c:3, d:"akhil",e:['akhil','tom']})
}) 




// my experiments --single handler but different type of requests
app.route('/book')
  .get((req, res) => {
    res.send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })
//express routes





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

