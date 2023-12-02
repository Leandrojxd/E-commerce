import BookingProductCard from '@/components/organism/BookingProductCard'
import TopBarHeader from '@/components/organism/TopBarHeader'
import TopHeaderCategoryProducts from '@/components/organism/TopHeaderCategoryProducts'
import EmptyShoppingCart from '@/components/templates/EmptyShoppingCart'
import React from 'react'

export default function ShoppingCart() {
  return (
    <div>
        <TopHeaderCategoryProducts content='DETALLE DE TU RESERVA'/> 
        <BookingProductCard />
    </div>
  )
}
