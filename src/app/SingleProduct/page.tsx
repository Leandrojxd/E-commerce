import DescriptionSingleProduct from "@/components/molecules/DescriptionSingleProduct";
import SingleProductHeader from "@/components/molecules/SingleProductHeader";
import SingleProductImage from "@/components/molecules/SingleProductImage";
import FooterSingleProduct from "@/components/organism/FooterSingleProduct";

export default function Product() {
  return (
    <div>
      <SingleProductImage />
      <SingleProductHeader />
      <DescriptionSingleProduct />
      <FooterSingleProduct/>
    </div>
  )
}
