import React from 'react'
import styles from 'public/home.module.css'

function BackButton404() {
  return (
    <div>
        <button className={styles.back_button_style_error}>
            <p className={styles.back_button_text_style}>
                VOLVER ATRAS  
            </p>
        </button>
    </div>
  )
}

export default BackButton404