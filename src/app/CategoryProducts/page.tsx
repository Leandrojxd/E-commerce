import ProductCard from '@/components/organism/ProductCard'
import TopHeaderCategoryProducts from '@/components/organism/TopHeaderCategoryProducts'
import React from 'react'
import styles from 'public/home.module.css'
import ShoppingBagFooter from '@/components/templates/ShoppingBagFooter'

export default function () {
  return (
    <div>
        <TopHeaderCategoryProducts />
        <div className={styles.category_products_position}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
        <ShoppingBagFooter/>
    </div>
  )
}
