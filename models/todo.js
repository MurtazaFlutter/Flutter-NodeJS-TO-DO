const mongoose= require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Make sure 'required' is set to true
  },
  description: {
    type: String,
    required: true, // Make sure 'required' is set to true
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});


module.exports = mongoose.model("Todo", todoSchema);