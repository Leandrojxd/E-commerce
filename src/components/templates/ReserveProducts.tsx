import React from 'react'
import ReserveProductInformation from '../molecules/ReserveProductInformation'
import BookingProductCard from '../organism/BookingProductCard'

function ReserveProducts() {
  return (
    <div>
        <BookingProductCard/>
        <BookingProductCard/>
        <BookingProductCard/>
    </div>
  )
}

export default ReserveProducts