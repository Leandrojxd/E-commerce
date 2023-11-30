import React from 'react'
import styles from 'public/home.module.css'

function SingleProductHeader() {
  return (
    <div>
      <div className={styles.single_product_header_position}>
       <div className={styles.product_name_single_product_position}>
            <h1 className={styles.title_card}>CILINDRO DE ALUMINIO DE 1M3</h1>
            <p className={styles.brand_card}>INEGAR</p>
        </div>
        <div >
            <h1 className={styles.price_card}>$us 25.00</h1>
            <p className={styles.description_card}>caja de 12 pzas.</p>
        </div>
      </div>
    </div>
  )
}

export default SingleProductHeader