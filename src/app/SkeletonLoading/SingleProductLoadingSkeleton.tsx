import React from 'react'
import styles from  'public/skeleton.module.css'
import homestyles from 'public/home.module.css'

function SingleProductLoadingSkeleton() {
  return (
    <>
        <div className={homestyles.single_product_header_position}>
      <div className={homestyles.product_name_single_product_position}>
        <div className={styles.single_product_title_skeleton}></div>
        <div className={styles.single_product_info_skeleton}></div>  
      </div> 
      <div className={styles.single_product_position_price_quantity}>
        <div className={styles.single_product_price_skeleton}></div>
        <div className={styles.single_product_info_skeleton}></div>  
      </div> 
    </div>
    <div className={styles.single_product_description_skeleton}></div>
    </>

  )
}

export default SingleProductLoadingSkeleton