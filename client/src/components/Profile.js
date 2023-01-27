import React, { useState, useEffect } from 'react'
import BookList from './BookList';
import PoemList from './PoemList'

const Profile = ({ currentUser, favorites }) => {
  const [submissions, setSubmissions] = useState([])
  
  useEffect(() => {
    fetch(`/user_books/${currentUser.id}`)
    .then((r) => r.json())
    .then((userSubs) => setSubmissions(userSubs))
  }, [currentUser])


  return (
    <div>
      {" "}
      <div>
        <h1>{currentUser.username}'s submissions</h1>
        <h3>submissions</h3>
        <div>
        <BookList books={submissions}/>
        </div>
        <div>
         {/* <BookList books={favorites}/> */}
        </div>
      </div>
    </div>
  )
}

export default Profile
