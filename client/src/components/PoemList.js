import React from 'react'
import PoemForm from './PoemForm'
import PoemCard from './PoemCard'

const PoemList = ({ currentUser, poems, handleDeletePoem, enterPoemEdit, favorites, setFavorites }) => {
  
  
  
  const poemList = poems?.map((poem) => {
    return <PoemCard 
    key={poem.id} 
    poem={poem} 
    currentUser={currentUser}
    favorites={favorites}
    setFavorites={setFavorites}
    enterPoemEdit={enterPoemEdit}
    handleDeletePoem={handleDeletePoem}/>
  })


  return (
    <div>
    <img width="250px" height="250px" className="poem-img" src="../images/eap.png"></img>
    <ul className="poemList">
    🥀 {poemList}
    </ul>
    </div>
  )
}

export default PoemList
