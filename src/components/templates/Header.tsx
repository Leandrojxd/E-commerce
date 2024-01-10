import TopBarHeader from "../organism/TopBarHeader";
import CustomImage from "../atoms/CustomImage";
import Search from "../organism/Search";
import styles from "public/home.module.css";

async function Header() {
  

  return (
    <div className={styles.Header}>
      <TopBarHeader />
      <CustomImage src={""} alt="Promo.png" width={300} height={200} />
      <Search />
    </div>
  );
}

export default Header;
