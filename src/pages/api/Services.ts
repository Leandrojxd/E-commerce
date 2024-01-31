import supabase from "@/pages/api/supabase";
import { CategoriesData, ImageAssets, ProductsData, SingleProductInfo } from "./DataType";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getAllByNameOfTable = async (
  NameTableData: string
): Promise<CategoriesData[] | ProductsData[]> => {
  try {
    const { data, error } = await supabase.from(NameTableData).select("*");
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const getImageByName = async (
  NameImage: string
): Promise<ImageAssets> => {
  const { data, error } = await supabase
    .from("Assets")
    .select("*")
    .eq("Name", NameImage)
    .single();
  if (error) {
    console.log("Error getting the Image", error);
  }
  return data as ImageAssets;
};

export const fetchDataByQuery = async (searchQuery: string):Promise<ProductsData[]> => {
  try {
    const { data, error } = await supabase.from("Products")
    .select("*")
    .textSearch("Name",searchQuery);
    
    if (error) {
      throw error;
    }
    return data as ProductsData[];
  } catch (error) {
    console.error("Error getting the data byQuery:", error);
    return [];
  }
};

export const serviceFetchSingleProductById = async (Product_id: string):Promise<SingleProductInfo> => {
    const { data, error } = await supabase
      .from('Products')
      .select('*')
      .eq('Product_id', Product_id)
      .single();
    if (error) {
      console.log("Error un single product Service")
    }
    return data as SingleProductInfo
};
