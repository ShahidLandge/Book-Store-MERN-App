
  import axios from "axios";
  import React, { useEffect } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  
  const BookDelete = () => {
    const id = useParams().id;
  
    console.log(id)
    const navigate = useNavigate();
    useEffect(() => {
      const deleteHandler = async () => {
        await axios
          .delete(`http://localhost:5000/books/${id}`)
          .then((res) => {
            console.log(res.data)
           navigate("/books")
          return  res.data.book
        
          })
      };
      deleteHandler();
    }, [id]);
  
    return (
      <div>
       
      </div>
    );
  };
  
  export default BookDelete;