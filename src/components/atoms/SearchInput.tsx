import React from 'react'
import style from 'public/home.module.css'

type SearchInputProps = {
  placeholder: string;
}

function SearchInput({placeholder}: SearchInputProps) {
  return (
    <div>
        <input type="text" placeholder={placeholder} className={style.searchInput_style} />
    </div>
  )
}

export default SearchInput