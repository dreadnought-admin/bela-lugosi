import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Signup = ({ updateUser }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState([])
  const navigate = useNavigate();

  const { username, email, password } = formData

  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      username,
      email,
      password
    };

    fetch(`/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          updateUser(user)
          navigate("/")
        });
      } else {
        r.json().then((json) => setErrors(Object.entries(json.errors)))
      }
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div>
        <h1>Hi, I'm your sign up page!</h1>
        <div>
          <form onSubmit={onSubmit}>
            <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            onChange={handleChange}
            />
            <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
            />
            <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            />

            <div>
              <button
                type="submit"
                value="Submit">Sign Up</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Signup
