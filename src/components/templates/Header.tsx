"use client"

import React, { useState, useEffect } from 'react';
import TopBarHeader from '../organism/TopBarHeader';
import CustomImage from '../atoms/CustomImage';
import Search from '../organism/Search';
import styles from 'public/home.module.css';
import { getImageByName } from '@/pages/api/Services';

function Header() {
  const [imgPromo, setImgPromo] = useState<string>();

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const image:Blob = await getImageByName("OtherAssets", "Promo.png");
        setImgPromo(URL.createObjectURL(image));
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div className={styles.Header}>
      <TopBarHeader />
      {imgPromo && (
        <CustomImage
          src={imgPromo}
          alt="Promo.png"
          width={348}
          height={146}
          className={styles.promo_style}
        />
      )}
      <Search />
    </div>
  );
}

export default Header;