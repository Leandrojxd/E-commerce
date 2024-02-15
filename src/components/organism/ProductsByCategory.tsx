"use client";

import React, { useEffect, useState } from "react";
import TopHeaderCategoryProducts from "./TopHeaderCategoryProducts";
import { ProductsData } from "@/pages/api/DataType";
import {
  getCategoryName,
  serviceFetchProductsByCategory,
} from "@/pages/api/Services";
import ProductCard from "./ProductCard";
import ProductsLoading from "@/app/SkeletonLoading/ProductsLoading";
import ShoppingBagFooter from "../templates/ShoppingBagFooter";

function ProductsByCategory({ category_id }: { category_id: string }) {
  const [productsByCategory, setProductsByCategory] = useState<ProductsData[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [categoryName, setCategoryName] = useState<string>("CategoryName");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryNameData = await getCategoryName(category_id);
        const productsByCategoryData = await serviceFetchProductsByCategory(
          category_id
        );
        setCategoryName(categoryNameData);
        setProductsByCategory(productsByCategoryData as ProductsData[]);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <TopHeaderCategoryProducts content={categoryName} />
      {loading ? (
        <ProductsLoading />
      ) : (
        productsByCategory.map((product: ProductsData, index: number) => (
          <ProductCard
            key={index}
            title={product.Name}
            brand={product.Brand}
            description={product.Description}
            price={product.Price}
            product_id={product.Product_id}
          />
        ))
      )}
      <ShoppingBagFooter contextButtonShoppingBag="ver pedido" />
    </div>
  );
}

export default ProductsByCategory;
