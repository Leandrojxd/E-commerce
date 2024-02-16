"use client";

import React from "react";
import BookingProductCard from "../organism/BookingProductCard";
import { useShoppingCartContext } from "@/pages/api/DataContext";

function ReserveProducts() {
  const { shoppingCartReserveProducts } = useShoppingCartContext();
  console.log(shoppingCartReserveProducts)
  return (
    <div>
      {shoppingCartReserveProducts.map((reserveProduct, index) => (
        <BookingProductCard key={index} reserveProduct={reserveProduct} />
      ))}
    </div>
  );
}

export default ReserveProducts;
