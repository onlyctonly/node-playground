//models
var mongoose=require('mongoose');
var TodoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

var Todo = mongoose.model('Todo', TodoSchema);

module.exports=Todo;
