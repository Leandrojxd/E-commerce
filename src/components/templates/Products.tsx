import React from 'react'
import styles from 'public/home.module.css'
import ProductCard from '../organism/ProductCard'

function Products() {
  return (
    <div>
      <p className={styles.title_style} >Productos</p>
      <ProductCard/>
    </div>
  )
}

export default Products