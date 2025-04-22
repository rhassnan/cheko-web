import React, { useEffect, useState } from 'react'
import SearchIcon  from '../../assets/icons/search.svg?react'
import FilterIcon from '../../assets/icons/filter.svg?react'
import './style.css'

interface Props {
    // onSearch: (keyword: string) => void;
    searchKeyword: string;
  setSearchKeyword: (val: string) => void;
  }

export default function SearchFilter({searchKeyword, setSearchKeyword }: Props) {

    const [inputValue, setInputValue] = useState(searchKeyword);

    // useEffect(() => {
    //     if (searchKeyword === "") setInputValue("");
    //   }, [searchKeyword]);
    
      const handleSearch = () => {
        setSearchKeyword(inputValue.trim());
      };




  return (
    <div className='search-filter-container'>
        <div className='search'>
            <SearchIcon/>
            <input className='input' type='text' placeholder='Search'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSearch();
                }
              }}
            />
        </div>
        <div className='filter'> 
        <FilterIcon/>
            <p className='filter-txt'>Filter</p>
        </div>
        <div className='search-btn-container'>
            <button className='search-btn' type='button' onClick={handleSearch}>Search</button>
        </div>
    </div>
  )
}
