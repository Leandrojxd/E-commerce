import React from 'react'
import Number from '../atoms/Number';
import styles from 'public/home.module.css';
import BusinessLogoName from '../molecules/BusinessLogoName';

function TopBarHeader() {
  return (
    <div className={styles.topBarHeader}>
        <BusinessLogoName />
        <Number />
    </div>
  )
}

export default TopBarHeader