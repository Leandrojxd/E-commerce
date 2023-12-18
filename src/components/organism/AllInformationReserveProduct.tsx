import React from "react";
import styles from "public/home.module.css";
import ReserveProductInformation from "../molecules/ReserveProductInformation";
import CustomButton from "../atoms/CustomButton";
import PlusMinusProduct from "../molecules/PlusMinusProduct";
import PlusMinusReserve from "../molecules/PlusMinusReserve";

function AllInformationReserveProduct() {
  return (
    <div>
      <div className={styles.allinfo_section_position}>
        <ReserveProductInformation />
        <PlusMinusReserve/>
      </div>
    </div>
  );
}

export default AllInformationReserveProduct;
