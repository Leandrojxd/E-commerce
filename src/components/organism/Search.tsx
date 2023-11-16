import React from 'react'
import CustomImage from '../atoms/CustomImage'
import SearchInput from '../atoms/SearchInput'

function Search() {
  return (
    <div>
        <CustomImage src='/assets/SearchIcon.png' alt='SearchIcon' width={30} height={30}/>
        <SearchInput placeholder="Busca lo que necesitas"/>
    </div>
  )
}

export default Search