import React from 'react'
import { Link } from 'react-router-dom'

const BookCard = ({ book, handleDeleteBook, enterBookEdit }) => {
  
  const { id, title, author, genre, year_published, summary, cover_img } = book

  const handleDelete = () => {
    fetch(`books/${id}`, {
      method: "DELETE",
    })
    handleDeleteBook(id)
  }

  const handleEditClick = () => {
    enterBookEdit(id);
  }
  
  return (
    <div>
      <img width="50px" height="50px" src={cover_img}></img>
      <div>
        <h2>{title} {author}</h2>
        <h3>{genre} | {year_published}</h3>
        
      </div>
      <Link to={`/books/${id}`}>Details</Link>
      <div>
        <button type="button" id={id} onClick={handleDelete}>Delete</button>
        <Link to={`${id}/edit`}>
          <button type="button" id={id} onClick={handleEditClick}>Edit</button>
        </Link>
      </div>
      
    </div>
  )
}

export default BookCard
