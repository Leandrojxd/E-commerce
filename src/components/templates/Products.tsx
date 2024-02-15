"use client";

import styles from "public/home.module.css";
import ProductCard from "../organism/ProductCard";
import { ProductsData } from "@/pages/api/DataType";
import { getAllByNameOfTable } from "@/pages/api/Services";
import { useEffect, useState } from "react";
import ProductsLoading from "@/app/SkeletonLoading/ProductsLoading";

type ProductsProps = {
  productsDataByQuery?: ProductsData[];
};

function Products({ productsDataByQuery = []}: ProductsProps) {
  const [productsData,setProductsData] = useState<ProductsData[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getDataProducts = async () => {
      const data = productsDataByQuery.length === 0? 
      ((await getAllByNameOfTable("Products")) as ProductsData[])
          : productsDataByQuery;
      setProductsData(data);
      setLoading(false);
      };
    getDataProducts();
  });

  return (
    <div>
      <p className={styles.title_style}>Productos</p>
      {loading? <ProductsLoading/> : productsData.map((product: ProductsData, index: number) => (
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
