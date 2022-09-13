import { Button } from "@mui/material"
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";
const Book = (props) => {
  const navigate = useNavigate();
  const { _id, name, author, description, price, image } = props.book;
  
  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <div>
      <h3>{name}</h3>
      <h3>Rs {price}</h3>
      </div>
      <div>
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
 
       <Button LinkComponent={Link} to={`/booksDelete/${_id}`} sx={{ mt: "auto" }}>
        Delete
      </Button>
      </div>
    </div>
  );
};

export default Book;