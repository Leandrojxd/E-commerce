import TopBarHeader from "../organism/TopBarHeader";
import CustomImage from "../atoms/CustomImage";
import Search from "../organism/Search";
import styles from "public/home.module.css";
import { getImageByName } from "@/pages/api/Services";

async function Header() {
  
  const imageBlob =  getImageByName("OtherAssets", "Promo.png");

  return (
    <div className={styles.Header}>
      <TopBarHeader />
      <CustomImage src={imageBlob} alt="Promo.png" width={300} height={200} />
      <Search />
    </div>
  );
}

export default Header;
