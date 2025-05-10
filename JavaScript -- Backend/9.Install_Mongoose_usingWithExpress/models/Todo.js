import mongoose from "mongoose";

// creating schema
const TodoSchema = new mongoose.Schema({
    // title: String,
    title: {type: String, required: true, default: "Hey"},
    desc: String,
    isDone: Boolean,
    days: Number
});
//modelling this schema
export const Todo = mongoose.model('Todo', TodoSchema);
