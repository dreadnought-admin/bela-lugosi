import React from 'react'
import PoemForm from './PoemForm'
import PoemCard from './PoemCard'

const PoemList = ({ poems, handleDeletePoem, enterPoemEdit }) => {
  
  
  
  const poemList = poems.map((poem) => {
    return <PoemCard 
    key={poem.id} 
    poem={poem} 
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
