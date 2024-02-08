"use client";

import TopBarHeader from "../organism/TopBarHeader";
import CustomImage from "../atoms/CustomImage";
import Search from "../organism/Search";
import styles from "public/home.module.css";
import { ImageAssets } from "@/pages/api/DataType";
import { getImageByName } from "@/pages/api/Services";
import { useEffect, useState } from "react";
import ImageLoading from "@/app/SkeletonLoading/ImageLoading";

function Header() {
  const [loading, setLoading] = useState(true);
  const [urlImage, setUrlImage] = useState<ImageAssets>();

  useEffect(() => {
    const fetchImage = async () => {
      const urlImage = await getImageByName("Promo");
      setUrlImage(urlImage);
      setLoading(false);
    };
    fetchImage();
  }, []);

  return (
    <div className={styles.Header}>
      <TopBarHeader />
      {loading ? (
        <ImageLoading />
      ) : (
        <CustomImage
          src={urlImage?.Url_Image as string}
          alt={urlImage?.Name as string}
          width={366}
          height={200}
        />
      )}
      <Search />
    </div>
  );
}

export default Header;
