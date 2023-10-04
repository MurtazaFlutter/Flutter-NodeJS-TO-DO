const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const todoRoute = require('./routes/todo');

const app = express();
const PORT = 3000;

// Connect to Database
mongoose.connect('mongodb://ac-frwwolc-shard-00-00.ztqi84s.mongodb.net:27017,ac-frwwolc-shard-00-01.ztqi84s.mongodb.net:27017,ac-frwwolc-shard-00-02.ztqi84s.mongodb.net:27017/?replicaSet=atlas-1270gq-shard-0&ssl=true');

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
