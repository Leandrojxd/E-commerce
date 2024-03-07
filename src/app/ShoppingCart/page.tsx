"use client";

import TopHeaderCategoryProducts from "@/components/organism/TopHeaderCategoryProducts";
import BookingForm from "@/components/templates/BookingForm";
import EmptyShoppingCart from "@/components/templates/EmptyShoppingCart";
import ReserveProducts from "@/components/templates/ReserveProducts";
import ShoppingBagFooter from "@/components/templates/ShoppingBagFooter";
import { useShoppingCartContext } from "@/pages/api/DataContext";
import { UserContextProvider } from "@/pages/api/UserContext";
import React, { useEffect, useState } from "react";

export default function ShoppingCart() {
  const { shoppingCartReserveProducts, setReserveProductsFromLocalStorage } =
    useShoppingCartContext();
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    setReserveProductsFromLocalStorage();
    setLoading(false)
  }, []);

  return (
    <UserContextProvider>
      <div>
        {loading ? (
          <>loading</>
        ) : shoppingCartReserveProducts.length > 0 ? (
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
    </UserContextProvider>
  );
}
