import React from 'react'
import { useState } from 'react'

function SearchBar() {
const [searchQuery, setSearchQuery] = useState('')
  return (
    <div>

    <form style={{ display: 'flex', flexDirection: 'column' }} /* onSubmit={handleSearch} */>

        <label>Search: <br/><input value={searchQuery} type="text" /* onChange={event =>setSearchString(event.target.value)} */ /></label>
        <label><input type="checkbox"></input> Only show products in stock</label>
        

        </form>

    </div>
  )
}

export default SearchBar