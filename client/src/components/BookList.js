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
    <div className="book_list">
      <ul className="cards">
        {bookList}
      </ul>
      <div className="new_book_button_container">
        <Link className="new_button" to="/newbook">
          Summon a new book!
        </Link>
      </div>
    </div>
  )
}

export default BookList
