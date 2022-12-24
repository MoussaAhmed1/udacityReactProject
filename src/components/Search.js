import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { search } from '../BooksAPI';
import { Book } from './Book.js';
export default function Search({books,handleShelves}) {
  
    const [qurey,setQuery] = useState("");
    const [searchedBooks,setSearchedBooks] = useState([...books])
    const [loading,setloading] =useState(true)
   const handelSearch= (e)=>{
    setQuery(e.target.value.trim())
    
    // call back-end
    const temp = []
      search(qurey,2)
    .then(async book=>{ 
      if(book.length){
        setSearchedBooks(book) 
        setloading(false)
      }
      else
      loading = true
    })
    .catch(err=>console.log(err))   
    
    console.log(typeof(searchedBooks));
    console.log((searchedBooks.length));
  }
 


   
    return (
      <div className="search-books">
      <div className="search-books-bar">
        <Link
          className="close-search"
          to="/"
        >
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input className="form-control"  value={qurey} 
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e)=>handelSearch(e)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {
            loading?"still no data":
            searchedBooks.map(sb=>{
             return( <li key={sb.id}><Book book={sb} handleShelves={handleShelves} /></li>)
            })
          }
        </ol>
      </div>
    </div>
    )
  
}




