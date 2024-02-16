"use client";

import TopHeaderCategoryProducts from "@/components/organism/TopHeaderCategoryProducts";
import BookingForm from "@/components/templates/BookingForm";
import EmptyShoppingCart from "@/components/templates/EmptyShoppingCart";
import ReserveProducts from "@/components/templates/ReserveProducts";
import ShoppingBagFooter from "@/components/templates/ShoppingBagFooter";
import { useShoppingCartContext } from "@/pages/api/DataContext";
import React from "react";

export default function ShoppingCart() {
  const { shoppingCartReserveProducts } = useShoppingCartContext();
  return (
    <div>
      {shoppingCartReserveProducts.length > 0 ? (
        <>
          <TopHeaderCategoryProducts content="DETALLE DE TU RESERVA" />
          <ReserveProducts />
          <BookingForm />
          <ShoppingBagFooter contextButtonShoppingBag="realizar pedido" />
        </>
      ) : (
        <>
          <EmptyShoppingCart />
        </>
      )}
    </div>
  );
}
