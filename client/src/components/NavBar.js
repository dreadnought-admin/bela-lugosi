import React from 'react'
import { NavLink, Link } from 'react-router-dom'
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
    <header>
            <nav className="navbar">
                <ul class="nav">
                <div className="buttonbar">
                    <div className="logoContainer">
                        <li><Link to="/">
                        <img className="siteLogo" height="200px" width="200px" src="../images/circulargigas.png"></img>
                        <p className="home_txt">Home</p>
                        </Link>
                        </li>
                    </div>
                    <li>
                    <NavLink to="/poems">
                        <p>Poems</p>
                    </NavLink>
                    </li>

                    <li>
                    <NavLink to="/books">
                        <p>Books</p>
                    </NavLink>
                    </li>

                    <li>
                    <NavLink to="/login">
                        <p>Login</p>
                    </NavLink>
                    </li>
                    
                    <li>
                    <NavLink to ="/about">
                        <p>What is Gothic Literature?</p>
                    </NavLink>
                    </li>

                {currentUser && (
                    <div>
                        <NavLink to="/profile">
                            <a>The Darkness Embraces You, {currentUser.username}</a>
                        </NavLink>

                        <div>
                            <NavLink to="/" onClick={handleLogOut}>Logout</NavLink>
                        </div>
                    </div>
                )}
                    
                </div>
                </ul>
            </nav>
    </header>
  )
}

export default NavBar
