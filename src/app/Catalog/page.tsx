"use client";

import FilterSearchBar from "@/components/organism/FilterSearchBar";
import Categories from "@/components/templates/Categories";
import NoResults from "@/components/templates/NoResults";
import Products from "@/components/templates/Products";
import { CategoriesData, ProductsData } from "@/pages/api/DataType";
import { fetchDataByQuery } from "@/pages/api/Services";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "public/home.module.css";
import { Suspense, useEffect, useState } from "react";

export default function Catalog() {
  <></>
}