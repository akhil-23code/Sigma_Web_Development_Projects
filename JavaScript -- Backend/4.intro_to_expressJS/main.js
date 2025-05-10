// express Documentation -- [ god ]  https://expressjs.com

//refer http server for hostname clearance

//hello world for expressJS
const express = require('express')
const app = express()
const hostname = 'localhost'
const port = 3000


/*  
first revise the below part then come back to learn app.use 
express.static(public) -- builtIN middleware -- make the folder of name public as public
 */
app.use(express.static('public'))
// try http://localhost:3000/harry.txt  -- harry.txt is a public utility now




//server application methods -> app.get, app.post, app.put, app.delete(path, handler)
app.get('/',(req,res)=>{
    res.send(`Hello World!`)
})
//examples for new pages [different paths]
app.get('/about',(req,res)=>{
    res.send(`Hello about!`)
}).get('/contact',(req,res)=>{
    res.send(`Hello contact!`)
}).get('/blog',(req,res)=>{
    res.send(`Hello blog!`)
})

// try localhost:3000/harry  -- Cannot GET /harry
//requesting parameters and queries
app.get('/:slug',(req,res)=>{
    res.send(`hello ${req.params.slug}`)
    // console.log(req);
    console.log(req.params);
    console.log(req.query);
})
// url given -- http://localhost:3000/intro-to-mongo?q=hey+google+boy&oq=hey+google++boy&mode=dark
// clog(req.params) -- { slug: 'intro-to-mongo' }
// clog(req.query)  -- { q: 'hey google boy', oq: 'hey google  boy', mode: 'dark' }



app.listen(port,hostname,()=>{
    console.log(`Example app listening on port ${port}`)
    console.log(`Server running at http://${hostname}:${port}/`);
})