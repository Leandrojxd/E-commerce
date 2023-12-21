import TopHeaderCategoryProducts from '@/components/organism/TopHeaderCategoryProducts'
import BookingForm from '@/components/templates/BookingForm'
import ReserveProducts from '@/components/templates/ReserveProducts'
import ShoppingBagFooter from '@/components/templates/ShoppingBagFooter'
import React, { Suspense } from 'react'

export default function ShoppingCart() {
  return (
    <div>
        <TopHeaderCategoryProducts content='DETALLE DE TU RESERVA'/> 
        <ReserveProducts/>
        <BookingForm/>
        <ShoppingBagFooter/>
    </div>
  )
}
