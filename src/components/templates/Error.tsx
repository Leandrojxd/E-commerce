import React from 'react'
import CustomImage from '../atoms/CustomImage'
import BackButton404 from '../atoms/BackButton404'
import CustomText from '../atoms/CustomText'
import styles from 'public/home.module.css'

function Error() {
  return (
    <div className={styles.error_message_position}>
        <CustomImage src='/assets/404error.png' width={211} height={211} alt='404 ERROR'/>
        <CustomText content={'oh, algo paso mientras usabas la pagina'} customClassName={styles.error_message_text_style}/>
        <BackButton404 />
    </div>
  )
}

export default Error