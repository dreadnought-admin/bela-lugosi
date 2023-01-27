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
    <div className="poem_img_cont">
    <img className="poem-img" src="../images/lucy.png"></img>
    <ul className="poemList">
    🥀 {poemList}
    </ul>
    </div>
  )
}

export default PoemList
