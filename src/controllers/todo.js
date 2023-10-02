const Todo = require('../models/todo');

// Create
exports.createTodo = async (req, res) => {
    try {
const todo = new Todo(req.body);
const savedTodo = await todo.save();
res.json(savedTodo);
    } catch (error){
        res.status(500).json({error: "Could not create the Todo"})
    }
}