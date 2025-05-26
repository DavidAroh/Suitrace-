import { useState } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'
import './SearchBox.css'

function SearchBox() {
  const [searchText, setSearchText] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const handleSearchChange = (e) => {
    setSearchText(e.target.value)
  }

  const clearSearch = () => {
    setSearchText('')
  }

  return (
    <div className={`searchBox ${isFocused ? 'focused' : ''}`}>
      <div className="searchBox__container">
        <FaSearch className="searchBox__icon" />
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={handleSearchChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {searchText && (
          <button className="searchBox__clear\" onClick={clearSearch}>
            <FaTimes />
          </button>
        )}
      </div>
    </div>
  )
}

export default SearchBox