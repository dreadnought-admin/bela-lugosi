import React from 'react'
import BookCard from './BookCard'
import { Link } from 'react-router-dom'

const BookList = ({ books, handleDeleteBook, enterBookEdit }) => {
  
  const bookList = books?.map((book) => {
    return <BookCard
    key={book.id}
    book={book}
    enterBookEdit={enterBookEdit}
    handleDeleteBook={handleDeleteBook}/>
  })
  
  return (
    <div>
      <ul className="cards">
        {bookList}
      </ul>
      <div>
        <Link className="newBook" to="/newbook">
          Summon a new book!
        </Link>
      </div>
    </div>
  )
}

export default BookList
