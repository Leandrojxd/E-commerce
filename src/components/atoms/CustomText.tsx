import React from 'react'

type CustomTextProps = {
    content: string,
    customClassName: string,
}


function CustomText({content , customClassName }:CustomTextProps) {
  return (
    <p className={customClassName}>
        {content}
    </p>
  )
}

export default CustomText