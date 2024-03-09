"use client";

import React from "react";
import BookingProductCard from "../organism/BookingProductCard";
import { useShoppingCartContext } from "@/pages/api/DataContext";

function ReserveProducts() {
  const { shoppingCartReserveProducts } = useShoppingCartContext();
  return (
    <div>
      {shoppingCartReserveProducts.map((reserveProduct, index) => (
        <BookingProductCard key={index} index={index} reserveProduct={reserveProduct} />
      ))}
    </div>
  );
}

export default ReserveProducts;
