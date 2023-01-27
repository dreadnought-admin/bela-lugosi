import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const NavBar = ({ updateUser, currentUser }) => {

    const navigate = useNavigate();
    const handleLogOut = () => {
        fetch("/logout", {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                navigate("/");
                updateUser(false);
            }
        });
    }

  return (
    <div>
        <div>
            
                <Link to="/">
                    Home
                </Link>
                <Link to="/poems">
                    <a href="">
                        <h1>Poems</h1>
                    </a>
                </Link>
                <Link to="/books">
                    <h1>Books</h1>
                </Link>
                <Link to="/login">
                    Login
                </Link>
                <Link to ="/about">
                    What is Gothic Literature?
                </Link>

            {currentUser && (
                <div className='bar-item'>
                    <Link to="/profile">
                        <a>Hello, {currentUser.username}</a>
                    </Link>
                    <div>
                        <Link to="/" onClick={handleLogOut}>Logout</Link>
                    </div>
                </div>
            )}

        </div>
      
    </div>
  )
}

export default NavBar
