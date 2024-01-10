import supabase from "@/pages/api/supabase";
import { CategoriesData } from "./DataType";

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const getAllCategories = async (): Promise<CategoriesData[]> => {
  await sleep(2000)
  try {
    const { data , error } = await supabase.from("Category").select("*");
    if (error) {
      throw error;
    }
    console.log(data)
    return data as CategoriesData[];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};


