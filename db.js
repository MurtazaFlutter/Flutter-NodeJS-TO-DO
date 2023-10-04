
const mongoose = require('mongoose');

const connectDB = async () => {
    
    try {
        const connect = await mongoose.connect('mongodb://localhost:27017/Todos');
        const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB ' `${connect}`);
});
    }catch (error){
        console.log(error);
    }
}

module.exports = connectDB;