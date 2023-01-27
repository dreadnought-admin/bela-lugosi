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
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <ul>
          <li>
            <input
            type="text"
            name="title"
            id="title"
            placeholder="title"
            value={formData.title}
            onChange={handleChange}
            />
          </li>
          <li>
            <input
            type="text"
            name="author"
            id="author"
            placeholder="author"
            value={formData.author}
            onChange={handleChange}
            />
          </li>
          <li>
            <input
            type="text"
            name="genre"
            id="genre"
            placeholder="genre"
            value={formData.genre}
            onChange={handleChange}
            />
          </li>
          <li>
            <input
            type="number"
            name="year_published"
            id="year_published"
            placeholder="pub"
            value={formData.year_published}
            onChange={handleChange}
            />
          </li>
          <li>
            <input
            type="text"
            name="summary"
            id="summary"
            placeholder="summary"
            value={formData.summary}
            onChange={handleChange}
            />
          </li>
          <li>
            <input
            type="text"
            name="cover_img"
            id="cover_img"
            placeholder="cover"
            value={formData.cover_img}
            onChange={handleChange}
            />
          </li>
        </ul>
        <button className="button" type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      
    </div>
  )
}

export default BookForm
