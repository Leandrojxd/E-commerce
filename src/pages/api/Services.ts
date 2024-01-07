import supabase from "@/pages/api/supabase";
import { CategoriesData } from "./DataType";
import { Product } from "./DataType";

type CategoryInformation = {
  Name:string,
  Description:string,
}
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const getAllCategories = async (): Promise<CategoriesData[]> => {
  await sleep(4000)
  try {
    const { data , error } = await supabase.from("Category").select("*");
    if (error) {
      throw error;
    }
    return data as CategoriesData[];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const getImageByName =   (
  BucketName: string,
  RouteName: string
): string => {
  try {
    const { data } = supabase.storage
      .from(BucketName)
      .getPublicUrl(RouteName)
    return data.publicUrl;
  } catch (error) {
    console.log("Error Image Bucket: ", error);
    return "";
  }
};

