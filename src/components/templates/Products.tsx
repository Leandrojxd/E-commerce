"use client"

import React, { useEffect, useState } from 'react'
import styles from 'public/home.module.css'
import ProductCard from '../organism/ProductCard'
import supabase from '@/pages/api/supabase'

function Products() {
  
  const[products,setProducts] = useState<any[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {

        if (!supabase) {
          throw new Error('Supabase client is null');
        }

        const { data, error } = await supabase.from('Products').select('*');

        if (error) {
          throw error;
        }

        if (data) {
          setProducts(data);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }
    fetchProducts();
  });
  
  return (
    <div>
      <p className={styles.title_style} >Productos</p>
      {products.map((product:any, index:number)=>(
        <ProductCard 
        key={index}
        title={product.Name} 
        brand={product.Brand} 
        description={product.Description} 
        price={product.Price}/>
      ))}
      
    </div>
  )
}

export default Products