import React from 'react'
import styles from 'public/home.module.css'

function SingleProductHeader() {
  return (
    <div>
        <div className=''>
            <h1 className={styles.title_card}>CILINDRO DE ALUMINIO DE 1M3</h1>
            <p className={styles.brand_card}>INEGAR</p>
        </div>
        <div className=''>
            <h1 className={styles.price_card}>$us 25.00</h1>
            <p className={styles.description_card}>caja de 12 pzas.</p>
        </div>
    </div>
  )
}

export default SingleProductHeader