import React from 'react'
import { Link } from 'react-router-dom'

const PoemCard = ({ poem, handleDeletePoem, enterPoemEdit }) => {

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
        <h2>{title} {author}</h2>
        <h3>{genre} | Rhyme Scheme: {poem_type}</h3>
        <h4>{year_published}</h4>
        <p>{poem_txt}</p>
      </div>
      <div>
        <button type="button" id={id} onClick={handleDelete}>Delete</button>
        <Link to={`${id}/edit`}>
          <button type="button" onClick={handleEditClick}>Edit</button>
        </Link>
      </div>
    </div>
  )
}

export default PoemCard
