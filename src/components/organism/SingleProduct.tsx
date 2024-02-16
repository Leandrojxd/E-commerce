import React from "react";
import styles from "public/home.module.css";
import CustomImage from "../atoms/CustomImage";
import PlusMinusProduct from "../molecules/PlusMinusProduct";
import TotalSection from "../molecules/TotalSection";
import { useEffect, useState } from "react";
import { serviceFetchSingleProductById } from "@/pages/api/Services";
import { SingleProductInfo } from "@/pages/api/DataType";
import { useShoppingCartContext } from "@/pages/api/DataContext";
import SingleProductLoadingSkeleton from "@/app/SkeletonLoading/SingleProductLoadingSkeleton";

function SingleProduct({ product_id }: { product_id: string }) {
  const handleGoBack = () => {
    window.history.back();
  };
  const [singleProduct, setSingleProduct] = useState<SingleProductInfo>();
  const [loading, setLoading] = useState(true);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const handlerQuantityChange = (newQuantity: number) => {
    setTotalQuantity(newQuantity);
  };
  const { setCurrentProduct } = useShoppingCartContext();
  useEffect(() => {
    const fetchSingleProductById = async (Product_id: string) => {
      const singleProductSupabase = await serviceFetchSingleProductById(
        Product_id
      );
      setSingleProduct(singleProductSupabase as SingleProductInfo);
      setLoading(false);
    };
    fetchSingleProductById(product_id);
  }, [product_id]);

  useEffect(() => {
    setCurrentProduct({
      productName: singleProduct?.Name as string,
      productBrand: singleProduct?.Brand as string,
      productPrice: singleProduct?.Price as string,
    });
  }, [singleProduct]);

  return (
    <div>
      <div>
        <div className={styles.single_product_image_container_style}>
          <CustomImage
            src="/assets/ProductImage.png"
            width={112}
            height={111}
            alt="ProductImage"
            className=""
          />
          <button
            onClick={handleGoBack}
            className={styles.button_exit_product_style}
          >
            <p className={styles.text_style_button_exit}>x</p>
          </button>
        </div>
      </div>

      {loading ? (
        <SingleProductLoadingSkeleton/>
      ) : (
        <div>
          <div className={styles.single_product_header_position}>
            <div className={styles.product_name_single_product_position}>
              <h1 className={styles.title_card}>
                {singleProduct?.Name.toUpperCase()}
              </h1>
              <p className={styles.brand_card}>{singleProduct?.Brand}</p>
            </div>
            <div>
              <h1
                className={styles.price_card}
              >{`$us ${singleProduct?.Price}`}</h1>
              <p className={styles.description_card}>
                {singleProduct?.Description}
              </p>
            </div>
          </div>
          <div>
            <p className={styles.description_single_product_style}>
              {singleProduct?.Description}
            </p>
          </div>
        </div>
      )}

      <div className={styles.footer_single_product_position}>
        <PlusMinusProduct OnChangeTotalQuantity={handlerQuantityChange} />
        <TotalSection
          totalQuantity={totalQuantity}
          priceProduct={Number(singleProduct?.Price)}
        />
      </div>
    </div>
  );
}

export default SingleProduct;
