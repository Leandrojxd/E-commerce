import React from "react";
import styles from "public/home.module.css";
import CustomImage from "../atoms/CustomImage";
import PlusMinusProduct from "../molecules/PlusMinusProduct";
import TotalSection from "../molecules/TotalSection";
import { useEffect, useState } from "react";
import { serviceFetchSingleProductById } from "@/pages/api/Services";
import { SingleProductInfo } from "@/pages/api/DataType";

function SingleProduct({ product_id }: { product_id: string }) {
  const [singleProduct, setSingleProduct] = useState<SingleProductInfo>();
  const [loading, setLoading] = useState(true);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const handlerQuantityChange = (newQuantity: number) => {
    setTotalQuantity(newQuantity);
  };
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
          <button className={styles.button_exit_product_style}>
            <p className={styles.text_style_button_exit}>x</p>
          </button>
        </div>
      </div>

      {loading ? (
        <>Loading Single Product</>
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
        </div>
      )}
      <div>
        <p className={styles.description_single_product_style}>
          Cilindro de aluminio MED540 1M3 2021. <br />
          <br></br>
          Cilindro de aluminio de uso medicinal de 1M3 ano 2021 con valvula
          GCA540
        </p>
      </div>
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
