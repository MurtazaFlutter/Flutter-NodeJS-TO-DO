const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo');


//create Todo
router.post('/api/todos', todoController.createTodo);

//Get Todos
router.get('/api/getTodos', todoController.getAllTodos);






module.exports = router;