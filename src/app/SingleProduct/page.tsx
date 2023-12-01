import DescriptionSingleProduct from "@/components/molecules/DescriptionSingleProduct";
import PlusMinusProduct from "@/components/molecules/PlusMinusProduct";
import SingleProductHeader from "@/components/molecules/SingleProductHeader";
import SingleProductImage from "@/components/molecules/SingleProductImage";

export default function Product() {
  return (
    <div>
      <SingleProductImage />
      <SingleProductHeader />
      <DescriptionSingleProduct />
      <PlusMinusProduct />
    </div>
  )
}
