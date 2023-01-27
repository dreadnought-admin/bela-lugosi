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
        <img height="100px" width="100px" src={cover_img}></img>
        <h1>{title}</h1>
        <h2>{author}</h2>
        <h2>{genre} | {year_published} </h2>
        <p>{summary}</p>
      </div>
      <Link to="/books">
      <button className="button" type="button">Back to the Library</button>
      </Link>
      <Link to={`/books/${id}/edit`}>
        Edit this book
      </Link>
      {/* <button type="button" onClick={handleFavorite}>Favorite</button> */}

      
    </div>
  )
}

export default BookDetail
