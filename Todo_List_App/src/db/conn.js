import mongoose from 'mongoose'

//Connect Database
const urldb = 'mongodb://127.0.0.1:27017/ToDoListDB';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(urldb, options).then(() => {
    console.log("Connection Successful");
}).catch((err) => {
    console.log(err);
});

export default mongoose;