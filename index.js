const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const todoRoute = require('./routes/todo');

const app = express();
const PORT = 3000;

// Connect to Database
mongoose.connect('mongodb://localhost:27017/Todos');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
// 
app.use(bodyParser.json());
app.use(todoRoute);

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})
