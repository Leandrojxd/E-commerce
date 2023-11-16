import React from 'react'
import CustomImage from '../atoms/CustomImage'
import Number from '../atoms/Number'

function TopBarHeader() {
  return (
    <div>
        <CustomImage src="/assets/LogoSanJuan.png" alt="SanJuanLogo" width={46} height={52} />
        <Number />
        <p>test</p>
    </div>
  )
}

export default TopBarHeader