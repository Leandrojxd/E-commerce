"use client"

import CustomImage from "../atoms/CustomImage"
import ProductDescription from "../molecules/ProductDescription"
import styles from 'public/home.module.css'
import Link from "next/link"

type ProductCardProps = {
  title:string,
  brand:string,
  description:string,
  price:string,
  product_id:string,
}

function ProductCard({ title, brand, description, price, product_id}: ProductCardProps) {

  return (
    <Link href={`./Catalog/${product_id}`} className={styles.link_style}>
      <div className={styles.product_card_link} >
        <div className={styles.product_card_style}>
          <ProductDescription title={title} brand={brand} description={description} price={`$us ${price}.00`} />
          <div className={styles.product_card_img}>
            <CustomImage src='/assets/ProductImage.png' width={112} height={111} alt='ProductImage' />
          </div>
        </div>
      </div>
    </Link>

  );
}

export default ProductCard;