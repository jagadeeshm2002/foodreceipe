import React from 'react'

export default function Search({search,setSearch,handleSearch}) {
    
  return (
    <div className='search-engine'>
        <input type="text" name="search" className='city-search' placeholder='Enter City Name' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button className='search-btn' onClick={handleSearch}>Search Weather</button>

    </div>
  )
}
