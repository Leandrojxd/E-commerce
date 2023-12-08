import ProductCard from '@/components/organism/ProductCard'
import TopHeaderCategoryProducts from '@/components/organism/TopHeaderCategoryProducts'
import React from 'react'
import styles from 'public/home.module.css'
import ShoppingBagFooter from '@/components/templates/ShoppingBagFooter'

export default function CategoryProducts() {
  return (
    <div>
        <TopHeaderCategoryProducts content='GENERADORES DE GASOLINA' />
        <div className={styles.category_products_position}>
          <ProductCard title='TITLE PRODUCT' brand='BRAND PRODUCT' description='This is the description' price='25' product_id='1'/>
        </div>
        <ShoppingBagFooter/>
    </div>
  )
}

