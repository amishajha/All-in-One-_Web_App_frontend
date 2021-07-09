import axios from 'axios';
import React, { useState } from 'react'
import "./Book.css";
import Typical from 'react-typical'


function Book() {

    const [book,setBook]=useState("");
    const [result,setResult]=useState([])
    const [apiKey,setApiKey]=useState("AIzaSyBvi0ZvPBdwQlXVYeRM05gO-DEVNcx4AvM")

    function handleChange(event){
        const book=event.target.value;
        setBook(book);


    }
    function handleSubmit(event){
        event.preventDefault();
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=40")
        .then(data=>{
        setResult(data.data.items);
        })

    }
    return (

        <div className="container">

            <div class="form">
       <h2>Search Your Books 🔍</h2> 
            <form onSubmit={handleSubmit}>
            <div class="form-group">
            <input type="text" onChange={handleChange}className="form-control " placeholder="Search Your Books" autoComplete="off"/>
             </div>

        <button type="submit" className="btn btn-danger">Search</button>
    </form>
    </div>
    <div class="books">
      
      {result.map(book=>(
          <a href={book.volumeInfo.previewLink}>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
    </a>
      ))}
           </div>
        </div>
    )
}

export default Book
