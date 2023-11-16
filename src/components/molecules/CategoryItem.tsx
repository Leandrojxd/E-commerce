import React from 'react'
import CustomImage from '../atoms/CustomImage'

type CategoryItemProps = {
    source: string,
    title: string,
    subtitle: string,
}

function CategoryItem({source,title,subtitle}:CategoryItemProps) {
  return (
    <div>
        <CustomImage src={source} alt='Category' width={50} height={50}/>
        <label>
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </label>
    </div>
  )
}

export default CategoryItem