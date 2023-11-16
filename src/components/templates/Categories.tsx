import React from 'react'
import CategoryItem from '../molecules/CategoryItem'

function Categories() {
  return (
    <div>
        <h1>CATEGORIAS</h1>
        <CategoryItem source='/assets/CategoryImg.png' title='Maquinaria de soldar' subtitle='Oxigeno'/>
    </div>
  )
}

export default Categories