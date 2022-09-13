const mongoose = require("mongoose");

// connecting to mongodb server
// mongoose.connect('mongodb://localhost:27017/BooksDB').then(()=>{
//   console.log('connected to mongodb srver successfully');
// }).catch((err)=>{
//   console.log(err);
// })

// 2nd step- creating schema
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please enter book name']
  },
  author: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
  },
  image: {
    type: String,
    // required: false,
  },
});

// 3rd step - creating model or collection
module.exports = mongoose.model("Book", bookSchema);


