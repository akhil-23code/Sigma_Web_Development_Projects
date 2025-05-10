// express website - guide:
// writing middleware
// using middleware
const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
const blog = require('./routes/blog')

app.use('/blog',blog)  //router-level middlewares

//inBuilt Middleware
// app.use(express.static("public"))

//saari requests k liye kuch modify or treat karna chahte ho toh middleware banalo
//middlewares can be used in logging pages and write separate middlewares for that page
//also validate cookie

//in middlewares orders is important -- matlab first-m1 them m2

//MiddleWare 1 -- usage --- logger for our application --collects the logs
//note: for middleware 1 and middleware 2 -- we'va not provided the path, so verytime these middlewares will run for every path requsts
app.use((req, res, next) => {
    console.log("m1");
    /*
        //if res.send -- this will terminate here
        res.send('hacked by middleware 1')
        // next()  --do not write next() after there res.send
    */
    console.log(`${Date.now()}`)

    var date = new Date()
    console.log(date.toLocaleString());

    //always use sync functins here
    fs.appendFileSync("logs.txt", `${date.toLocaleString()}\n`)


    console.log(req.headers);
    req.harry = "i am akhil"

    next()
    // next()

})

//MiddleWare 2
app.use((req, res, next) => {
    console.log("m2");

    req.harry="iam harry bhai"
    // next()
    next()
})

app.get('/', (req, res) => {
    res.send(`Hello World! through ${req.method} request`)
})

app.get('/about', (req, res) => {
    res.send(`Hello about!`+req.harry)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})