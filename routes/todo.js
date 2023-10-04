const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo');


//create Todo
router.post('/api/todos', todoController.createTodo);

//Get Todos
router.get('/api/getTodos', todoController.getAllTodos);

//update Todos
router.put('/api/todos/:id', todoController.updateTodo);

//Get Todo by ID
router.get('/api/todos/:id', todoController.getTodoById);

//Delete Todo
router.delete('/api/todos/:id', todoController.deleteTodo);


module.exports = router;