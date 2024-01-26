"use client";

import styles from "public/home.module.css";
import ProductCard from "../organism/ProductCard";
import { ProductsData } from "@/pages/api/DataType";
import { getAllByNameOfTable } from "@/pages/api/Services";
import { useEffect, useState } from "react";

type ProductsProps = {
  productsDataByQuery?: ProductsData[];
};

function Products({ productsDataByQuery = [] }: ProductsProps) {
  const [productsData,setProductsData] = useState<ProductsData[]>([])

  useEffect(() => {
    const getDataProducts = async () => {
      const data = productsDataByQuery.length === 0 ? 
      ((await getAllByNameOfTable("Products")) as ProductsData[])
          : productsDataByQuery;
      setProductsData(data);
      };
    getDataProducts();
  });

  return (
    <div>
      <p className={styles.title_style}>Productos</p>
      {productsData.map((product: ProductsData, index: number) => (
        <ProductCard
          key={index}
          title={product.Name}
          brand={product.Brand}
          description={product.Description}
          price={product.Price}
          product_id={product.Product_id}
        />
      ))}
    </div>
  );
}

export default Products;
