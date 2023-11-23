import ProductCard from '@/components/organism/ProductCard'
import TopHeaderCategoryProducts from '@/components/organism/TopHeaderCategoryProducts'
import React from 'react'
import styles from 'public/home.module.css'

export default function () {
  return (
    <div>
        <TopHeaderCategoryProducts />
        <div className={styles.category_products_position}>
            <ProductCard />
            <ProductCard />
        </div>
    </div>
  )
}
