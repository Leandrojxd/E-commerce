"use client";

import DescriptionSingleProduct from "@/components/molecules/DescriptionSingleProduct";
import SingleProductHeader from "@/components/molecules/SingleProductHeader";
import SingleProductImage from "@/components/molecules/SingleProductImage";
import FooterSingleProduct from "@/components/organism/FooterSingleProduct";
import SingleProduct from "@/components/organism/SingleProduct";
import { SingleProductInfo } from "@/pages/api/DataType";
import { serviceFetchSingleProductById } from "@/pages/api/Services";
import { useEffect, useState } from "react";

type ProductId = {
  product_id: string;
};

type ProductsProps = {
  params: ProductId;
};

export default function Product({ params }: ProductsProps) {
  const [singleProduct, setSingleProduct] = useState<SingleProductInfo>();
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const fetchSingleProductById = async (Product_id: string) => {
      const singleProductSupabase = await serviceFetchSingleProductById(
        Product_id
      );
      setSingleProduct(singleProductSupabase as SingleProductInfo);
      setLoading(false);
    };
    fetchSingleProductById(params.product_id);
  }, [params.product_id]);

  return (
    <div>
      <SingleProduct product_id={params.product_id} />
    </div>
  );
}
