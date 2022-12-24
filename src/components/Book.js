import React from 'react'

export  const Book = ({book,handleShelves}) => {

  return (
    <div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage:
            `url("${book.imageLinks["smallThumbnail"]}")`,
        }}
      ></div>
      <div className="book-shelf-changer">
        <select className="form-control" id={book.id} value={"book.shelf"} onChange={(event)=>handleShelves(event,book)}>
          <option value={"none"} disabled>
            Move to...
          </option>
          <option value={"none"}>None</option>
          <option value={"currentlyReading"} >
            Currently Reading
          </option>
          <option value={"wantToRead"} >Want to Read</option>
          <option value={"read"} >Read</option>
        </select>
      </div>
    </div>
    <div className="book-title">{book.title}</div>
    <div className="book-authors">{book.authors}</div>
  </div>
  )
}
// Book.propTypes ={
//  book:prototypes.Object.isRequird
// }