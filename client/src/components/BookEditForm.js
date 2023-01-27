import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const initialState = {
  title: "",
  author: "",
  genre: "",
  year_published: 0, 
  summary: "", 
  cover_img: ""
}

const BookEditForm = ({ onUpdateBook }) => {

const [formData, setFormData] = useState(initialState)

  const { title, author, genre, year_published, summary, cover_img } = formData

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/books/${id}`)
    .then((r) => r.json())
    .then((book) => setFormData(book))
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(formData => ({ ...formData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBook = {
      title: formData.title,
      author: formData.author,
      genre: formData.genre,
      year_published: formData.year_published,
      summary: formData.summary,
      cover_img: formData.cover_img
    }
    fetch(`/books/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBook)
    })
    .then((r) => r.json())
    .then((updatedBook) => {
      onUpdateBook(updatedBook);
      navigate("/books")
    })
  }
  
    return (
      <div className="form_container">
        <form onSubmit={handleSubmit} autoComplete="off">
          <h3>Edit book</h3>
          <fieldset>
            <legend className="legend-text">
              What do you want to change?
            </legend>
            <ul className="book_form_list">
              <li>
                <label className="form_header" htmlFor='title'>Title:</label>
                <input
                className="input"
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={handleChange}
                />
              </li>
              <li>
                <label className="form_header" htmlFor='author'>Author:</label>
                <input
                className="input"
                type="text"
                id="author"
                name="author"
                value={author}
                onChange={handleChange}
                />
              </li>
              <li>
                <label className="form_header" htmlFor='genre'>Genre:</label>
                <input
                className="input"
                type="text"
                id="genre"
                name="genre"
                value={genre}
                onChange={handleChange}
                />
              </li>
              <li>
                <label className="form_header" htmlFor='year_published'>Year Published:</label>
                <input
                className="input"
                type="number"
                id="year_published"
                name="year_published"
                value={year_published}
                onChange={handleChange}
                />
              </li>

              <label className="form_header" htmlFor='summary'>Summary:</label>
              <li>
                <textarea
                className="edit_text_area"
                rows="25"
                cols="100"
                type="text"
                id="summary"
                name="summary"
                value={summary}
                onChange={handleChange}/>
              </li>

              <li>
                <label className="form_header" htmlFor='cover_img'>Cover Image URL</label>
                <input
                type="text"
                id="cover_img"
                name="cover_img"
                value={cover_img}
                onChange={handleChange}
                />
              </li>
  
            </ul>
            <button className="button" type="submit">Update</button>
          </fieldset>
        </form>
      </div>
    )
  }
export default BookEditForm
