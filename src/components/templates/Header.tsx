import TopBarHeader from "../organism/TopBarHeader";
import CustomImage from "../atoms/CustomImage";
import Search from "../organism/Search";
import styles from "public/home.module.css";
import { getImageByName } from "@/pages/api/Services";

async function Header() {
  const imageBlob = await getImageByName('OtherAssets', 'Promo.png');
  console.log("From server side:",imageBlob)

  return (
    <div className={styles.Header}>  
      <TopBarHeader />
      {imageBlob ? (
        <CustomImage
          src={imageBlob}
          alt="Promo.png"
          width={300}
          height={200}
        />
      ) : (
        <p>Cargando imagen...</p>
      )}
      <Search />
    </div>
  );
}

export default Header;