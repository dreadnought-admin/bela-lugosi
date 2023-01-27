import React from 'react'

const Search = ({ setSearch }) => {

  const handleChange = (e) => setSearch(e.target.value)

  return (
    <div className="searchbox">
    <label className="form_header" htmlFor='search'>Search</label> 

    <input
    className="input"
    autoComplete="off"
    type="text"
    id="search"
    placeholder="What doth thou seek, darkling?"
    onChange={handleChange}
    />



    </div>
  )
}

export default Search
