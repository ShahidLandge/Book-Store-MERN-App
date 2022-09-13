const BookModel = require("../model/Book");

//get all books
const getAllBooks = async (req, res, next) => {
  let allBooks;
  try {
    allBooks = await BookModel.find();
  } catch (err) {
    console.log(err);
  }

  if (!allBooks) {
    return res.status(404).json({ message: "No Books found" });
  }
  return res.status(200).json({ success:true ,allBooks });
};

// get book by id
const getById = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await BookModel.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "No Book found" });
  }
  return res.status(200).json({ book });
};

//update i.e add book
const addBook = async (req, res, next) => {
  const { name, author, price, available, image } = req.body;
  let book;
  try {
    book = new BookModel({
      name,
      author,
      price,
      available,
      image,
    });
    await book.save();
       //or 
  // book = await BookModel.create(req.body)
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ book });
};

const updateBook = async (req, res, next) => {
  const id = req.params.id;
   let book = await BookModel.findById(id);

  if (!book) {
    return res.status(404).json({ 
      suceess: false,
      message: "Unable To Update By this ID" 
    });
  }
  book = await BookModel.findByIdAndUpdate(id , req.body)
   res.status(200).json({ 
    success:true,
    book });
};

const deleteBook = async (req, res, next) => {
  const id = req.params.id;

   let book = await BookModel.findById(id);
 
  if (!book) {
    return res.status(404).json({
      success:false,
      message: "Unable To Delete By this ID" 
    });
  }
  await book.remove()
  return res.status(200).json({ 
    success:true,
    message: "Product Successfully Deleted" 
  });
};

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
