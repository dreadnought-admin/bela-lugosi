import React from 'react'
import { Link } from 'react-router-dom'

const PoemCard = ({ currentUser, poem, handleDeletePoem, enterPoemEdit, favorites, setFavorites }) => {

  const { id, title, author, genre, poem_txt, 
    poem_type, year_published } = poem 

    const handleDelete = () => {
      fetch(`poems/${id}`, {
        method: "DELETE",
      })
      handleDeletePoem(id)
    }

    const handleEditClick = () => {
      enterPoemEdit(id);
    }

    
  

  return (
    <div>
      <div>
        <h2><em>{title}</em> by {author}</h2>
        <h3>{genre} | Rhyme Scheme: {poem_type}</h3>
        <h4>{year_published}</h4>
        <p>{poem_txt}</p>
      </div>
      <div>
        <button className="button" type="button" id={id} onClick={handleDelete}>Banish 🔪</button>
        <Link to={`${id}/edit`}>
          <button className="button" type="button" onClick={handleEditClick}>Edit ✟</button>
        </Link>
      </div>
    </div>
  )
}

export default PoemCard
