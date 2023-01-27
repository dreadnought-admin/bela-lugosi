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
    <ul className="poemList">
      {poemList}
    </ul>
  )
}

export default PoemList
