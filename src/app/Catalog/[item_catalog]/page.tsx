"use client";

import CategoryProducts from "@/app/CategoryProducts/page";
import ProductsByCategory from "@/components/organism/ProductsByCategory";
import SingleProduct from "@/components/organism/SingleProduct";

type ItemProps = {
  item_catalog: string;
};

type ParamsProps = {
  params: ItemProps;
};

export default function Product({ params }: ParamsProps) {
  const typeItem = params.item_catalog.replace(/[0-9]/g, "");
  const item_id = params.item_catalog.replace(/\D/g, "");
  console.log(typeItem);
  return (
    <div>
      {typeItem === "P" ? (
        <SingleProduct product_id={item_id} />
      ) : (
        <ProductsByCategory category_id={item_id}/>
      )}
    </div>
  );
}
