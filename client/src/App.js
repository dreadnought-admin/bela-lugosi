import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import NavBar from './components/NavBar'



const App = () => {
  const [currentUser, setCurrentUser] = useState(false);
  const [books, setBooks] = useState([]);
  const [poems, setPoems] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("/authorized_user").then((r) => { 
      if (r.ok) {
        r.json().then((user) => {
          updateUser(user)
        });
      }
    });
  }, []);

  useEffect(() => {
    fetchPoems();
  }, []);

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    fetch(`/users/${currentUser.id}/favorites`)
    .then((r) => r.json())
    .then((favorites) => setFavorites(favorites));
  }, [currentUser]);

  const fetchPoems = () => {
    fetch("/poems")
    .then((r) => r.json())
    .then((poems) => {
      setPoems(poems);
    });
  }

  const fetchBooks = () => {
    fetch("/books")
    .then((r) => r.json())
    .then((books) => {
      setBooks(books);
    })
  }

  console.log(poems)
  console.log(books)

  const updateUser = (user) => setCurrentUser(user);


  return (
    <div>
      <Router>

        <NavBar updateUser={updateUser} currentUser={currentUser}/>

        <Routes>
          <Route 
            exact 
            path = "/signup"
            element={<Signup updateUser={updateUser} />}
          /> 

          <Route
            exact
            path = "/"
            element={<Login updateUser={updateUser} />}
          />

          <Route
            exact
            path = "/"
            element={<Home />}
          />

        </Routes>

      </Router>
      
    </div>
  );
}

export default App
