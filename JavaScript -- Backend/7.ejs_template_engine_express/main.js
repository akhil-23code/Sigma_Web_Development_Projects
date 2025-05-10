/*
ejs docs: https://ejs.co
    can use ejs extensions : for ejsout+ = <%= siteame %>

github for using ejs with express : https://github.com/mde/ejs/wiki/Using-EJS-with-Express
*/

//our aim : we have html file in our bootstrap_Templats , now we're getting variables from the db i.e siteName, searchText, blogTitle, blogContent 
// why use ejs templates 
// to put these variables into our html files

const express = require('express')
const app = express()
const port = 3000

//step1. set the view engine as ejs
app.set('view engine', 'ejs');

//normal mtd to use res.sendFile() to render the page
// check for same path before removing comments
/*
app.get('/', (req, res) => {
    res.sendFile('/bootstrap_Templates/index.html',{root:__dirname})
})
*/

//render is used instead of sendFile
//create "views" folder
app.get('/', (req, res) => {
    let siteName = 'Adidas'
    let searchText = "Search now"
    let arr = ['hello','motto']
    res.render('index',{siteName: siteName, searchText:searchText, arr})
//check syntax
    //siteName: siteName   -- means i will get siteName as siteName in my html page
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})