import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import PoemList from './components/PoemList'
import BookList from './components/BookList'
import Profile from './components/Profile'
import BookDetail from './components/BookDetail'
import BookEditForm from './components/BookEditForm'
import PoemEditForm from './components/PoemEditForm'
import BookForm from './components/BookForm'
import GothicLit from './components/GothicLit'

import Search from './components/Search'


const App = () => {
  const [currentUser, setCurrentUser] = useState(false);
  const [books, setBooks] = useState([]);
  const [poems, setPoems] = useState([]);
  const [favorites, setFavorites] = useState([]);


  const [bookId, setBookId] = useState(null);
  const [poemId, setPoemId] = useState(null);

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

  // useEffect(() => {
  //   fetch(`/users/${currentUser.id}/favorites`)
  //   .then((r) => r.json())
  //   .then((favorites) => setFavorites(favorites));
  // }, [currentUser]);

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

  // delete

  const handleDeletePoem = (id) => {
    const newPoemList = poems.filter((poem) =>
    poem.id !== id )
    setPoems(newPoemList)
  }

  const handleDeleteBook = (id) => {
    fetch(`/books/${id}`,
    {
      method: "DELETE",
    }
  )
    .then((r) => r.json())
    .then(() => {
      setBooks((books) => books.filter((book) => book.id !== id ))
    });
  }

  // patch 

  const onUpdatePoem = (updatedPoem) => {
    const updatedPoems = poems.map((ogPoem) => {
      if (ogPoem.id === updatedPoem.id) {
        return updatedPoem;
      } else {
        return ogPoem;
      }
    });
    setPoems(updatedPoems)
  }

  const onUpdateBook = (updatedBook) => {
    const updatedBooks = books.map((ogBook) => {
      if (ogBook.id === updatedBook.id) {
        return updatedBook;
      } else {
        return ogBook;
      }
    });
    setBooks(updatedBooks)
  }

  // complete editing

  const completeEditPoem = () => {
    setBookId(null);
  }

  const completeEditBook = () => {
    setPoemId(null);
  }

  // re-route and enter editing mode

  const enterBookEdit = (bookId) => {
    setBookId(bookId)
  }

  const enterPoemEdit = (poemId) => {
    setPoemId(poemId)
  }

  // search for books

  const [search, setSearch] = useState("")

  const searchQuery = books.filter(book => {
    return(
      book.title.toLowerCase().includes(search.toLowerCase())
    )
  })


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
            path = "/login"
            element={<Login updateUser={updateUser} />}
          />

          <Route
            exact
            path = "/"
            element={<Home />}
          />

          <Route
          exact 
          path = "/about"
          element={<GothicLit />}
          />

          <Route 
          exact
          path = "/poems"
          element=
          {<PoemList
            poems={poems}
            currentUser={currentUser}
            favorites={favorites}
            setFavorites={setFavorites}
            enterPoemEdit={enterPoemEdit}
            handleDeletePoem={handleDeletePoem} />}
          />

          <Route
          exact
          path = "/poems/:id/edit"
          element={<PoemEditForm 
          poemId={poemId}
          completeEditPoem={completeEditPoem}
          onUpdatePoem={onUpdatePoem}/>}
          />

          <Route
          exact
          path = "/books/:id/edit"
          element=
          {<BookEditForm 
            bookId={bookId}
            completeEditBook={completeEditBook}
            onUpdateBook={onUpdateBook}/>}
          />

          <Route 
          exact
          path = "/books/:id"
          element=
          {<BookDetail
            currentUser={currentUser}
            setFavorites={setFavorites}
            favorites={favorites} />}
          />


          <Route
          exact
          path = "/books"
          element=
          {<>
          <Search 
          search={search}
          setSearch={setSearch}/>

          <BookList 
          books={searchQuery}
          enterBookEdit={enterBookEdit}
          handleDeleteBook={handleDeleteBook}/></>
          }
          />

          {currentUser && (
          <Route
          exact
          path = "/profile"
          element=
          {<Profile
            currentUser={currentUser}
            favorites={favorites} />}
          />
          )}

          {currentUser && (
            <Route 
            exact
            path="/newbook"
            element=
              {<BookForm 
                books={books}
                setBooks={setBooks}
                currentUser={currentUser}/>}
            />
          )}
        
        </Routes>

      </Router>
      
      <Footer />
    </div>
  );
}

export default App
