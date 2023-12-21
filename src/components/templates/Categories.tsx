"use client";

import React, { Suspense, useEffect, useState } from "react";
import CategoryItem from "../molecules/CategoryItem";
import styles from "public/home.module.css";
import { CategoriesData, getAllCategories } from "@/pages/api/Services";

async function Categories() {
  const [categories, setCategories] = useState<CategoriesData[]>([]);
  useEffect(() => {
    async function settingData() {
      setCategories(await getAllCategories())
    }
    settingData();
  }, []);

  return (
    <div className={styles.categories}>
      <h1 className={styles.title_style}>CATEGORIAS</h1>
      {categories.map((category: any, index: number) => (
        <CategoryItem
          key={index}
          source={"/assets/CategoryImg.png"}
          title={category.Name}
          subtitle={category.Description}
        />
      ))}
    </div>
  );
}

export default Categories;
