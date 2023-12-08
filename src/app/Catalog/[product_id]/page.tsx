"use client"

import DescriptionSingleProduct from "@/components/molecules/DescriptionSingleProduct";
import SingleProductHeader from "@/components/molecules/SingleProductHeader";
import SingleProductImage from "@/components/molecules/SingleProductImage";
import FooterSingleProduct from "@/components/organism/FooterSingleProduct";
import supabase from "@/pages/api/supabase";
import { useEffect, useState } from "react";

type ProductId = {
  product_id:string,
}

type ProductsProps = {
  params:ProductId,
}



class ProductClass {
  private name: string = '';
  private brand: string = '';
  private price: string = '';
  private description: string = '';

  constructor() {}

  setName(name: string): void {
    this.name = name;
  }

  setBrand(brand: string): void {
    this.brand = brand;
  }

  setPrice(price: string): void {
    this.price = price;
  }

  setDescription(description: string): void {
    this.description = description;
  }

  getName(): string {
    return this.name;
  }

  getBrand(): string {
    return this.brand;
  }

  getPrice(): string {
    return this.price;
  }

  getDescription(): string {
    return this.description;
  }
}

export default function Product({params}:ProductsProps) {
  
  const [singleProduct,setSingleProduct] = useState<ProductClass>(new ProductClass());

  useEffect(() => {
    const fetchSingleProductById = async (Product_id: string) => {
      try {
        const { data, error } = await supabase
          .from('Products')
          .select('*')
          .eq('Product_id', Product_id)
          .single();
        
        if (error) {
          throw error;
        }

        if (data) { 
          setSingleProduct((prevProduct) => {
            const newProduct = new ProductClass();
            newProduct.setName(data.Name);
            return newProduct;
          });
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchSingleProductById(params.product_id);
  }, [params.product_id]);

  return (
    <div>
      <SingleProductImage />
      <SingleProductHeader
      title={singleProduct.getName()}
      brand={singleProduct.getBrand()}
      price={singleProduct.getPrice()}
      description={singleProduct.getDescription()}
      />
      <DescriptionSingleProduct />
      <FooterSingleProduct/>
    </div>
  )
}
