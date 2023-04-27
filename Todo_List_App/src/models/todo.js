import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  todo: String,
  //date: Date
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
