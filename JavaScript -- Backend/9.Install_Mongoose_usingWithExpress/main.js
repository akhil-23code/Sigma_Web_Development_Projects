// this is easy for  beginners -- https://www.npmjs.com/package/mongodb
import mongoose from "mongoose";
import express from "express"
import { Todo } from "./models/Todo.js";

//now connect to the database todo
await mongoose.connect("mongodb://localhost:27017/todo")

const app = express()
const port = 3000
/*
app.get('/', (req, res) => {
    const todo = new Todo({title: "hey todo", desc: "this is todo list", isDone: false, days: 9})
    todo.save()
    res.send('Hello World!')
})
*/
// app.get('/', async (req, res) => {
//     const todo = new Todo({title: "hey todo", desc: "this is todo list", isDone: false})
//     await todo.save()
//     res.send('Hello World!')
// })


app.get('/', (req, res) => {
    const todo = new Todo({desc: "this is todo list", isDone: false, days: 9})
    todo.save()
    res.send('Hello World!')
})

app.get('/a', async (req, res) => {
    let todo = await Todo.findOne({})
    res.json({title: todo.title, desc: todo.desc})    
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
