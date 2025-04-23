import { useState } from 'react'
import SearchIcon  from '../../assets/icons/search.svg?react'
import FilterIcon from '../../assets/icons/filter.svg?react'
import './style.css'
import Dropdown from '../dropdown';

interface Props {
    searchKeyword: string;
  setSearchKeyword: (val: string) => void;
  category: string | null;
  setCategory: (val: string | null) => void;
  }

export default function SearchFilter({searchKeyword, setSearchKeyword, category, setCategory }: Props) {

    const [inputValue, setInputValue] = useState(searchKeyword);

    const handleSelect = (option: string) => {
      setCategory(option === "All" ? null : option);
      };
    
    
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
            <Dropdown
        label={category || "All"}
        options={["All","Breakfast", "Drinks", "Soups", "Sushi", "Orders"]}
        selectedCategory={category}
        onSelect={handleSelect}
      />
        </div>
        <div className='search-btn-container'>
            <button className='search-btn' type='button' onClick={handleSearch}>Search</button>
        </div>
    </div>
  )
}
