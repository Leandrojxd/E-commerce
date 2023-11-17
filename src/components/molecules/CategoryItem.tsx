import React from 'react'
import CustomImage from '../atoms/CustomImage'
import styles from 'public/home.module.css'


type CategoryItemProps = {
    source: string,
    title: string,
    subtitle: string,
}

function CategoryItem({source,title,subtitle}:CategoryItemProps) {
  return (
    <div>
        <CustomImage src={source} alt='Category' className={styles.itemImg_style}/>
        <label>
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </label>
    </div>
  )
}

export default CategoryItem