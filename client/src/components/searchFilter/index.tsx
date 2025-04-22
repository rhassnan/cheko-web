import React, { useState } from 'react'
import SearchIcon  from '../../assets/icons/search.svg?react'
import FilterIcon from '../../assets/icons/filter.svg?react'
import './style.css'

export default function SearchFilter() {

    const [search, setSearch] = useState("")
  return (
    <div className='search-filter-container'>
        <div className='search'>
            <SearchIcon/>
            <input className='input' type='text' placeholder='Search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}/>
        </div>
        <div className='filter'> 
        <FilterIcon/>
            <p className='filter-txt'>Filter</p>
        </div>
        <div className='search-btn-container'>
            <button className='search-btn'>Search</button>
        </div>
    </div>
  )
}
