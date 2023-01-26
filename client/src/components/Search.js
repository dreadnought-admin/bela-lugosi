import React from 'react'

const Search = ({ setSearch }) => {

  const handleChange = (e) => setSearch(e.target.value)

  return (
    <div>
      <h1>I'm the search component!</h1>
    <label className="searchLabel" htmlFor='search'>Search</label> 

    <input
    autoComplete="off"
    className="queryBox"
    type="text"
    id="search"
    placeholder="What doth thou seek, darkling?"
    onChange={handleChange}
    />



    </div>
  )
}

export default Search
