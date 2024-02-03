"use client";

import SingleProduct from "@/components/organism/SingleProduct";

type ProductId = {
  product_id: string;
};

type ProductsProps = {
  params: ProductId;
};

export default function Product({ params }: ProductsProps) {
  return (
    <div>
      <SingleProduct product_id={params.product_id} />
    </div>
  );
}
