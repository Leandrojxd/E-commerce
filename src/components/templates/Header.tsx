import React from 'react'
import TopBarHeader from '../organism/TopBarHeader'
import CustomImage from '../atoms/CustomImage'
import Search from '../organism/Search'

function Header() {
  return (
    <div>
        <TopBarHeader/>
        <CustomImage src='/assets/Promo.png' alt="Promo.png" width={348} height={146}/>
        <Search />
    </div>
  )
}

export default Header