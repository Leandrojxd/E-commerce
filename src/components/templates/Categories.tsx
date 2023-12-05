"use client"

import React, { useEffect, useState } from 'react';
import CategoryItem from '../molecules/CategoryItem';
import styles from 'public/home.module.css';
import supabase from '@/pages/api/supabase';

function Categories() {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {

        if (!supabase) {
          throw new Error('Supabase client is null');
        }

        const { data, error } = await supabase.from('Category').select();

        if (error) {
          throw error;
        }

        if (data) {
          setCategories(data);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []); // useEffect se ejecutará solo al montar el componente

  return (
    <div className={styles.categories}>
      <h1 className={styles.title_style}>CATEGORIAS</h1>

      {categories.map((category: any, index: number) => (
        <CategoryItem
          key={index}
          source={'/assets/CategoryImg.png'}
          title={category.Name}
          subtitle={category.Description}
        />
      ))}

      
    </div>
  );
}

export default Categories;
