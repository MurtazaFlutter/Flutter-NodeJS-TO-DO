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

exports.getTodoById = async (req, res) => {
    try{
        const todo = await Todo.findById(req.params.id);
        if(!todo) return res.status(404).json({error: 'Todo not found'});
        res.json(todo);

    }catch (error){
         res.status(500).json({error: "Could not retrieve todos."});
    }
}

// Update a todo by ID
exports.updateTodo = async (req, res) => {
    try {
const updateTodo = await Todo.findByIdAndUpdate(req.params.id, req.body,{ new: true});
if(!updateTodo) return res.status(404).json({error: "Todo not foubd"});
res.json(updateTodo);
    }catch (error){
         res.status(500).json({error: "Could not retrieve todos."});
        
    }
}

exports.deleteTodo = async (req, res)=> {
    try {
const deleteTodo = await Todo.findByIdAndRemove(req.params.id);
if(!deleteTodo) req.res.status(404).json({error: 'Todo not found'});
res.json({message: 'Todo Deleted successfully'});
    }catch (error){
         res.status(500).json({ error: 'Could not delete the todo.' });
    }
}