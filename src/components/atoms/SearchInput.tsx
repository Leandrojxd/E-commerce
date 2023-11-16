import React from 'react'

type SearchInputProps = {
  placeholder: string;
}

function SearchInput({placeholder}: SearchInputProps) {
  return (
    <div>
        <input type="text" placeholder={placeholder} />
    </div>
  )
}

export default SearchInput