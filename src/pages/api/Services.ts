import supabase from "@/pages/api/supabase";
type CategoriesData = {
  Name: string;
  Description: string;
};

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
