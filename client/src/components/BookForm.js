import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BookForm = ({ books, setBooks, currentUser }) => {

const [formData, setFormData] = useState({
  title: "",
  author: "",
  genre: "",
  year_published: 0,
  summary: "",
  cover_img: ""
})

const [errors, setErrors] = useState([])
const navigate = useNavigate()

const handleSubmit = (e) => {
  e.preventDefault();

const formDataBody = { ...formData, user_id: currentUser.id }

fetch("/books", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(formDataBody)
}).then((r) => {
  if (r.ok) {
    r.json().then((newBook) => {
      setBooks([...books, newBook])
      navigate("/books")
    })
    } else { 
      r.json().then((json) => setErrors(Object.entries(json.errors)))
    }
  })
}

const handleChange = (e) => {
  let newInfo = {...formData}
  newInfo[e.target.id] = e.target.value
  setFormData(newInfo)
}



  

  return (
    <div className="new_form_container">
      <div className="new_form">
      <fieldset className="new_fieldset">
        <legend className="new_legend">
          Summon a new tome...
        </legend>
      <form className="new_book_form" autoComplete="off" onSubmit={handleSubmit}>
        <ul className="book_form_list">
          <li>
            <label className="new_form_header" htmlFor='title'>Title</label>
            <input
            className="input"
            type="text"
            name="title"
            id="title"
            placeholder="Enter a title"
            value={formData.title}
            onChange={handleChange}
            />
          </li>
          <li>
            <label className="new_form_header" htmlFor='author'>Author</label>
            <input
            className="input"
            type="text"
            name="author"
            id="author"
            placeholder="Enter an author"
            value={formData.author}
            onChange={handleChange}
            />
          </li>

          <li>
            <label className="new_form_header" htmlFor='genre'>Genre</label>
            <input
            className="input"
            type="text"
            name="genre"
            id="genre"
            placeholder="Enter a genre"
            value={formData.genre}
            onChange={handleChange}
            />
          </li>

          <li>
            <label className="new_form_header" htmlFor='year_published'>Publishing Year</label>
            <input
            className="input"
            type="number"
            name="year_published"
            id="year_published"
            placeholder="Year Published?"
            value={formData.year_published}
            onChange={handleChange}
            />
          </li>

            <label className="form_header" htmlFor='summary'>Summary</label>
          <li>
            <textarea
            className="edit_text_area"
            type="text"
            name="summary"
            id="summary"
            placeholder="Pray tell, what is this book about?"
            value={formData.summary}
            onChange={handleChange}
            />
          </li>

          <li>
            <label className="new_form_header" htmlFor='cover_img'>Cover Image URL</label>
            <input
            className="input"
            type="text"
            name="cover_img"
            id="cover_img"
            placeholder="cover"
            value={formData.cover_img}
            onChange={handleChange}
            />
          </li>
        </ul>

        <div className="new_book_button">
          <button className="button" type="submit" onClick={handleSubmit}>⛧ Submit ⛧</button>
        </div>     
      </form>
      </fieldset>

      </div>
      <div className="new_book_img">
        <img className="new_book_img_actual" src="../images/death.png"></img>
  </div>
</div>
  
  )
}

export default BookForm
