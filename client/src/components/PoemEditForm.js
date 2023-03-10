import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


const initialState = {
  title: "",
  author: "",
  genre: "",
  year_published: 0, 
  poem_txt: "", 
  poem_type: ""
}

const PoemEditForm = ({ onUpdatePoem }) => {
  const [formData, setFormData] = useState(initialState)

  const { title, author, genre, year_published, poem_txt, poem_type } = 
  formData

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/poems/${id}`)
    .then((r) => r.json())
    .then((poem) => setFormData(poem))
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(formdata => ({ ...formData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPoem = {
      title: formData.title,
      author: formData.author,
      genre: formData.genre,
      year_published: formData.year_published,
      poem_txt: formData.poem_txt,
      poem_type: formData.poem_type
    }
    fetch(`/poems/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPoem)
    })
    .then((r) => r.json())
    .then((updatedPoem) => {
      onUpdatePoem(updatedPoem);
      navigate("/poems")
    })
  }

  return (
    <div className="new_form">
      <form onSubmit={handleSubmit} autoComplete="off">
        <fieldset className="new_fieldset">
          <legend className="new_legend">
            Edit this Poem?
          </legend>
          <ul>
            <li>
              <label className="new_form_header" htmlFor='title'>Title:</label>
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
              <label className="new_form_header" htmlFor='author'>Author:</label>
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
              <label className="new_form_header" htmlFor='genre'>Genre:</label>
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
              <label className="new_form_header" htmlFor='year_published'>Year Published:</label>
              <input
              className="input"
              type="number"
              id="year_published"
              name="year_published"
              value={year_published}
              onChange={handleChange}
              />
            </li>
            
            <li>
              <label className="new_form_header" htmlFor='poem_type'>Rhyme Scheme/Type:</label>
              <input
              className="input"
              type="text"
              id="poem_type"
              name="poem_type"
              value={poem_type}
              onChange={handleChange}
              />
            </li>

            <label className="new_form_header" htmlFor='text'>Text:</label>
            <li>
              <textarea
              className="edit_text_area"
              type="text"
              id="poem_txt"
              rows="50"
              cols="40"
              name="poem_txt"
              value={poem_txt}
              onChange={handleChange}
              />
            </li>
          </ul>

          <button className="button" type="submit">Update ????</button>
        </fieldset>
      </form>
    </div>
  )
}

export default PoemEditForm
