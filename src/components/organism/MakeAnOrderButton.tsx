"use client";

import React from "react";
import Image from "next/image";
import styles from "public/home.module.css";
import Link from "next/link";
import { useUserContext } from "@/pages/api/UserContext";
import { useShoppingCartContext } from "@/pages/api/DataContext";

const MakeAnOrderButton = ({contextButtonShoppingBag,}: {contextButtonShoppingBag: string;}) => {
  const { user } = useUserContext();
  const { shoppingCartReserveProducts } = useShoppingCartContext();
  const sendMessage = () => {
    const listOfProductsTextFormat = shoppingCartReserveProducts.map(
      (product) => {
        return `${product.productName} - ${product.productBrand} - ${
          product.productPrice ?? "Precio no disponible"
        } - ${product.productQuantity}`;
      }
    ).join('\n- ');
    
    const message =
      encodeURIComponent(`Hola me llamo *${user.userName}* pedido para la ciudad - *${user.destinyCity}* \nProductos:\n- ${listOfProductsTextFormat}`);
    
    const phoneNumber = "65774908";

    window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${message}`;

    setTimeout(() => {
      window.location.href = "/CheckoutPage";
    }, 1000);
  };

  return (
    <div>
      {contextButtonShoppingBag == "realizar pedido" ? (
        <button className={styles.button_style3} onClick={sendMessage}>
          <div className={styles.button_style3_position}>
            <Image
              src={"/assets/shopping-bag.png"}
              alt="shoppingBagIcon"
              width={24}
              height={25}
            />
            <p className={styles.text_style_white}>
              {contextButtonShoppingBag}
            </p>
          </div>
        </button>
      ) : (
        <Link href={"../ShoppingCart"}>
          <div>
            <button className={styles.button_style3}>
              <div className={styles.button_style3_position}>
                <Image
                  src={"/assets/shopping-bag.png"}
                  alt="shoppingBagIcon"
                  width={24}
                  height={25}
                />
                <p className={styles.text_style_white}>
                  {contextButtonShoppingBag}
                </p>
              </div>
            </button>
          </div>
        </Link>
      )}
    </div>
  );
};

export default MakeAnOrderButton;
