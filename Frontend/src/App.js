import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/About";
import BookDetail from "./components/Book/BookDetail";
import BookDelete from "./components/Book/BookDelete";
import Login from "./redux/Login";
import { store } from "./redux/store";
import { useSelector} from  "react-redux" ; 


function App() {
  const userDetailsFromStore = useSelector((state) => state.user);
  console.log(userDetailsFromStore);
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddBook />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/books/:id" element={<BookDetail />} exact />
          <Route path="/booksDelete/:id" element={<BookDelete />} exact />
          <Route path="/login" element={<Login/>} exact />
     
        </Routes>
      </main>
    </>
  );
}

export default App;