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
                        <h1 className="home_txt">Home</h1>
                        </Link>
                        </li>
                    </div>
                    <li>
                    <NavLink to="/poems">
                        <h1>Poems 📜</h1>
                    </NavLink>
                    </li>

                    <li>
                    <NavLink to="/books">
                        <h1>Books 📕</h1>
                    </NavLink>
                    </li>

                    <li>
                    <NavLink to="/login">
                        <h1>Login 🧛🏻</h1>
                    </NavLink>
                    </li>
                    
                    <li>
                    <NavLink to ="/about">
                        <h1>What is Gothic Literature? 🕯️</h1>
                    </NavLink>
                    </li>

                {currentUser && (
                    <div>
                        <NavLink to="/profile">
                            <h2>The Darkness Embraces You, {currentUser.username} ⚰️</h2>
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
