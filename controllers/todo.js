const Todo = require('../models/todo');

// Create To-do api
exports.createTodo = async (req, res) => {
    try {
const todo = new Todo(req.body);
const savedTodo = await todo.save();
res.json(savedTodo);
    } catch (error){
        res.status(500).json({error: "Could not create the Todo" });
        console.log(error.message);
    }
}

// Get all todos 
exports.getAllTodos = async (req, res) => {
    try {
const todos = await Todo.find();
res.json(todos);
    }catch (error){
        res.status(500).json({error: "Could not retrieve todos."});
    }
}