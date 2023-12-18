import React from 'react'
import styles from 'public/home.module.css'

function ReserveProductInformation() {
  return (
    <div>
        <div className={styles.reserve_product_title}>
            <p className={styles.title_card}>CILINDRO DE ALUMINIO DE 1M3</p>
        </div>
          
        <div className={styles.info_reserve_position}>
            <p className={styles.brand_card}>INEGAR</p>
            <p className={styles.description_card}>$us 27.00</p>
        </div>
    </div>
  )
}

export default ReserveProductInformation