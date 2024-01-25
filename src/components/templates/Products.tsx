"use client"

import React, { useEffect, useState } from 'react'
import styles from 'public/home.module.css'
import ProductCard from '../organism/ProductCard'
import supabase from '@/pages/api/supabase'
import { getAllByNameOfTable } from '@/pages/api/Services'
import { ProductsData } from '@/pages/api/DataType'

type ProductsProps = {
  productsData:ProductsData[]
}


function Products({productsData}:ProductsProps) {
  return (
    <div>
      <p className={styles.title_style} >Productos</p>
      {productsData.map((product:ProductsData, index:number)=>(
        <ProductCard 
        key={index}
        title={product.Name} 
        brand={product.Brand} 
        description={product.Description} 
        price={product.Price}
        product_id={product.Product_id}
        />
      ))}
    </div>
  )
}

export default Products