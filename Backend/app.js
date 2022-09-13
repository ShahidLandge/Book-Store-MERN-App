const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books
// app.use('/' ,(req ,res ,next)=>{  //testing
//   res.send('this is home route ')
// })

// 1st step - connecting to mongodb server
mongoose.connect('mongodb://localhost:27017/BooksDB').then(()=>{
  console.log('connected to mongodb server successfully');
}).catch((err)=>{
  console.log(err);
})

  app.listen(5000 , ()=>{
    console.log('Server started running on http://localhost:5000')
  })
