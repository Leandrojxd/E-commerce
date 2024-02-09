"use client"

import React from 'react'
import BookingProductCard from '../organism/BookingProductCard'
import { useShoppingCartContext } from '@/pages/api/DataContext'

function ReserveProducts() {
  const {shoppingCartReserveProducts} = useShoppingCartContext();
  return (
    <div>
        {
          shoppingCartReserveProducts.map((reserveProduct)=>(
            <BookingProductCard reserveProduct={reserveProduct}/>
          ))
        }      
    </div>
  )
}

export default ReserveProducts