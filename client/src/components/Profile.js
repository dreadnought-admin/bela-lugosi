import React, { useState, useEffect } from 'react'
import BookList from './BookList';

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
      <div className="userContainer">
        <h1>🦇 {currentUser.username}'s Submissions</h1>
        <h3>Thou hath summoned...</h3>
        <div className="submissions">
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
