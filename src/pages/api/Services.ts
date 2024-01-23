import supabase from "@/pages/api/supabase";
import { CategoriesData, ImageAssets } from "./DataType";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getAllCategories = async (): Promise<CategoriesData[]> => {
  try {
    const { data, error } = await supabase.from("Category").select("*");
    if (error) {
      throw error;
    }
    return data as CategoriesData[];
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
