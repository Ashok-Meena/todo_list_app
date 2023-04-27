import express from 'express';
import Todo from '../models/todo.js';

const router = new express.Router();


//Index Route
router.get('/', async (req, res) => {
    try {
      const todos = await Todo.find({});
      res.render('index', { todos: todos });
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });

  
  // Route to add new todo
  router.post('/', async (req, res) => {
    const todo = new Todo({
      todo: req.body.todoValue,
      //date: req.body.todoDate
    });
    try {
      const todolist = await todo.save();
      res.redirect("/");
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error, Not add todo');
    }
  });
  
  // Update a todo
  router.put('/:id', async (req, res) => {
    try {
      const todo = await Todo.findById(req.params.id);
      if (!todo) return res.sendStatus(404);
  
      todo.todo = req.body.todo || todo.todo;
      //todo.date = req.body.date || todo.date;
  
      await todo.save();
      res.sendStatus(200).render("index");
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });
  
  // Delete a todo
  router.delete('/todos/:id', async (req, res) => {
    try {
      const todo = await Todo.findByIdAndRemove(req.params.id);
      if (!todo) return res.sendStatus(404);
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });
  
  export default router;

