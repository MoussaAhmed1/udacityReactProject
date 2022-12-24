import "./App.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Bookshelves } from "./components/Bookshelves";
import { useState ,useEffect} from 'react';
import { getAll } from './BooksAPI';
import { Book } from './components/Book';
import { update } from './BooksAPI';

import Search from './components/Search';
function App() {
  const [books,setBooks]=useState([])
    useEffect(() => {
      getAll()
      .then((books)=>{setBooks(books)})
      .catch(err=>console.log(err))
    }, [])
    


    const handleShelves = (event,book)=>{
      
  
    book.shelf = event.target.value;
    const newbooks = books.filter(b=>b.id!==book.id)
    
      setBooks([book,...newbooks])
    
    //call the backend
    update(book,book.shelf)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    }


  return (
        <div className="app">
    <Router>
      <Routes>
          <Route path="/" element={<Bookshelves handleShelves={handleShelves} books={books}/>} />
          <Route path="/search" element={<Search handleShelves={handleShelves} books={books}/>}/>
      </Routes>
      </Router>
        </div>
  );
}

export default App;
