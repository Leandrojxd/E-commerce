import React from 'react'
import styles from 'public/home.module.css'
import { timeEnd } from 'console'

type SingleHeaderProps = {
  title:string,
  brand:string,
  price:string,
  description:string,
}

function SingleProductHeader({title, brand, price, description}:SingleHeaderProps) {

  return (
    <div>
      <div className={styles.single_product_header_position}>
       <div className={styles.product_name_single_product_position}>
            <h1 className={styles.title_card}>{title.toUpperCase()}</h1>
            <p className={styles.brand_card}>{brand}</p>
        </div>
        <div >
            <h1 className={styles.price_card}>{`$us ${price}`}</h1>
            <p className={styles.description_card}>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default SingleProductHeader