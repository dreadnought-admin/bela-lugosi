import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'

const Login = ({ updateUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

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
      <div className="signup_img">
        <img className="signup_img_actual" src="../images/transparent_skull.png"></img>
      </div>
      <div className="login_form">
        <form onSubmit={handleSubmit}>
          <h1>Have Ye Crossed the River Styx Prior?</h1>
          <label className="form_header" htmlFor='username'>Username</label>
          <input
          className="input"
          type="text"
          id="username"
          name="username"
          autoComplete='off'
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
          <label className="form_header" htmlFor='password'>Password</label>
          <input
          className="input"
          type="pasword"
          id="pasword"
          autoComplete="current-password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          />

          <button className="button" type="submit">Take me to my lair!</button>

        </form>
      </div>
      
      <div className="signup">
        <Link className="create_link" to="/signup">☠️ Become Immortal: Create an Account ☠️</Link>
      </div>
      
    </div>
  )
}

export default Login

