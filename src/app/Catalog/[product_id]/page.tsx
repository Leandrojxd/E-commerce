import DescriptionSingleProduct from "@/components/molecules/DescriptionSingleProduct";
import SingleProductHeader from "@/components/molecules/SingleProductHeader";
import SingleProductImage from "@/components/molecules/SingleProductImage";
import FooterSingleProduct from "@/components/organism/FooterSingleProduct";
import supabase from "@/pages/api/supabase";
import { useEffect, useState } from "react";

type ProductsProps = {
  params:string,
}

export default function Product({params}:ProductsProps) {
  const [singleProduct,setSingleProduct] = useState<any[]>();
  useEffect(()=>{
    const fetchSingleProductById = async () =>{
      try{
        const {data,error} = await supabase.from('Products').select('*');
        
        
        if(error){
          throw error;
        }

        if(data) {
          console.log(data)
        }

      }catch (error) {
        console.error('Error fetching categories:', error);
      }
    }
  })
  return (
    <div>
      <SingleProductImage />
      <SingleProductHeader />
      <DescriptionSingleProduct />
      <FooterSingleProduct/>
    </div>
  )
}
