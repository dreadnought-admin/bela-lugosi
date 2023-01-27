import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

const BookDetail = ({ currentUser, favorites, setFavorites }) => {
  const [book, setBook] = useState("")
  const { id } = useParams()

  useEffect(() => {
    fetch(`/books/${id}`)
    .then((r) => r.json())
    .then((book) => {
      setBook(book)
    })
  }, [id])

  const { title, author, genre, year_published, summary, cover_img } = book

  // const handleFavorite = () => {
  //   const favoriteBook = { user_id: currentUser.id, book_id: id};
  //   fetch("/favorites", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(favoriteBook),
  //   })
  //   .then((r) => r.json())
  //   .then((data) => {
  //     setFavorites({... favorites, data})
  //   })
  // }


  
  return (
    <div>
      <div>
        <div className="detail_img"> 
        <img className="detail_img_actual" height="550em" width="450em" src={cover_img}></img>
        </div>
        <div className="details">
          <h1 className="detail_title">{title}</h1>
          <h2>{author} ✒️</h2>
          <h2>{genre} | {year_published} </h2>
          <p className="details_summary">{summary}</p>
        </div>
      </div>
      <div className="detail_links">
        <Link to="/books">
        <button className="button" type="button">Back to the Library 🕸</button>
        </Link>
        <Link className="detail_edit" to={`/books/${id}/edit`}>
          Doth thou protest? Suggest an edit? ⚱️
        </Link>
      </div>
      {/* <button type="button" onClick={handleFavorite}>Favorite</button> */}

      
    </div>
  )
}

export default BookDetail
