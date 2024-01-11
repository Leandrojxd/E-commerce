import TopBarHeader from "../organism/TopBarHeader";
import CustomImage from "../atoms/CustomImage";
import Search from "../organism/Search";
import styles from "public/home.module.css";
import { ImageAssets } from "@/pages/api/DataType";
import { getImageByName } from "@/pages/api/Services";

async function Header() {
  
  const UrlImage:ImageAssets = await getImageByName("Promo");
  
  return (
    <div className={styles.Header}>
      <TopBarHeader />
      <CustomImage src={UrlImage.Url_Image} alt={UrlImage.Name} width={300} height={200} />
      <Search />
    </div>
  );
}

export default Header;
