import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'

const Login = ({ updateUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();


  // const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => 
          updateUser(user));
          navigate("/")
        }
      });
    }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <label htmlFor='username'>username</label>
          <input
          type="text"
          id="username"
          name="username"
          autoComplete='off'
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor='password'>Password</label>
          <input
          type="pasword"
          id="pasword"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Submit</button>

        </form>
      </div>
      <h1>OR</h1>
      <div>
        <Link to="/signup">Create An Account</Link>
      </div>
      <h1>Hi, I'm your Login page</h1>
    </div>
  )
}

export default Login

