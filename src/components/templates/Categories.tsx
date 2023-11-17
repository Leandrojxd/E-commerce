import React from 'react'
import CategoryItem from '../molecules/CategoryItem'
import styles from 'public/home.module.css'

function Categories() {
  return (
    <div className={styles.categories}>
        <h1 className={styles.title_style}>CATEGORIAS</h1>
        <CategoryItem source='/assets/CategoryImg.png' title='Maquinaria de soldar' subtitle='Oxigeno'/>
        <CategoryItem source='/assets/CategoryImg.png' title='Generador de Luz' subtitle='Gasolina'/>
        <CategoryItem source='/assets/CategoryImg.png' title='Generador de Luz' subtitle='Diesel'/>
        <CategoryItem source='/assets/CategoryImg.png' title='Maquinaria de Soldar' subtitle='Oxigeno'/>
    </div>
  )
}

export default Categories