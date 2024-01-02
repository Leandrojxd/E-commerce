import TopBarHeader from "../organism/TopBarHeader";
import CustomImage from "../atoms/CustomImage";
import Search from "../organism/Search";
import styles from "public/home.module.css";
import { getImageByName } from "@/pages/api/Services";

async function Header() {
  const imgPromo2: Blob[] = await getImageByName("OtherAssets", "Promo.png");
  console.log(imgPromo2);

  return (
    <div className={styles.Header}>
      <TopBarHeader />
      {imgPromo2.map((blob: any) => (
        <CustomImage
          src={URL.createObjectURL(blob)}
          alt="Promo.png"
          width={348}
          height={146}
          className={styles.promo_style}
        />
      ))}
      <Search />
    </div>
  );
}

export default Header;
