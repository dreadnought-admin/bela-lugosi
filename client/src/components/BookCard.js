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
    <li className="card">
      <img width="150x" height="200px" src={cover_img}></img>
      <div>
        <h2>{title} by {author}</h2>
        <h3>🕯️ {genre} | {year_published} 🕯️</h3>
        
      </div>
      <Link className="detailsLink" to={`/books/${id}`}>See details...</Link>
      <div>
        <button className="button" type="button" id={id} onClick={handleDelete}>To the grave... 🪦 </button>
      </div>
      
    </li>
  )
}

export default BookCard
