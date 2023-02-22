import React from 'react'
import { useState } from 'react'

function SearchBar({searchQuery, setSearchQuery, inStockChecked, setInStockChecked}) {

console.log(event.target.checked)
  return (
    <div>

    <form style={{ display: 'flex', flexDirection: 'column' }} /* onSubmit={handleSearch} */>

        <label>Search: <br/><input value={searchQuery} type="text" onChange={(event) =>setSearchQuery(event.target.value)} /></label>
        <label><input type="checkbox" onChange={(event) =>setInStockChecked(event.target.checked)} ></input> Only show products in stock</label>
        

        </form>

    </div>
  )
}

export default SearchBar