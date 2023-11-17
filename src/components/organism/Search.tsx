import React from 'react'
import CustomImage from '../atoms/CustomImage'
import SearchInput from '../atoms/SearchInput'
import styles from 'public/home.module.css'

function Search() {
  return (
    <div className={styles.searchBar_style}>
        <CustomImage src='/assets/SearchIcon.png' alt='SearchIcon' className={styles.search_style}/>
        <SearchInput placeholder="Busca lo que necesitas"/>
    </div>
  )
}

export default Search