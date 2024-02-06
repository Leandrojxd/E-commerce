import CustomImage from "../atoms/CustomImage";
import styles from "public/home.module.css";
import PlusMinusReserve from "../molecules/PlusMinusReserve";
import { ReserveProduct } from "@/pages/api/DataContext";

function BookingProductCard({reserveProduct}:{reserveProduct:ReserveProduct}) {
  return (
    <div className={styles.booking_productcard_position}>
      <div className={styles.booking_product_image_style}>
        <CustomImage
          src="/assets/ProductImage.png"
          alt="ProductImage"
          width={112}
          height={111}
          className={styles.booking_product_img}
        />
      </div>
      <div>
        <div className={styles.allinfo_section_position}>
          <div>
            <div className={styles.reserve_product_title}>
              <p className={styles.title_card}>{reserveProduct.productName}</p>
            </div>

            <div className={styles.info_reserve_position}>
              <p className={styles.brand_card}>{reserveProduct.productBrand}</p>
              <p className={styles.description_card}>$us {reserveProduct.productPrice}</p>
            </div>
          </div>
          <PlusMinusReserve reserveProductQuantity={reserveProduct.productQuantity}/>
        </div>
      </div>
    </div>
  );
}

export default BookingProductCard;
