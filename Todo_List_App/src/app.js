import express from 'express';
import bodyParser from 'body-parser';
import mongoose from './db/conn.js';
import { default as Todo } from './models/todo.js';

//import { formatDate } from './views/helpers.js';
import { default as router } from './routes/todoRoutes.js';

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './src/templates/views');

app.use(express.static("public"));
app.use(router);




app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

