const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo');


//create
router.post('/api/todos', todoController.createTodo);






module.exports = router;