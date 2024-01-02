import supabase from "@/pages/api/supabase";

export type CategoriesData = {
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

export const getImageByName = async (BucketName: string, RouteName: string): Promise<Blob[]> => {
  try {
    const { data, error } = await supabase.storage.from(BucketName).download(RouteName);
    if (error) {
      throw error;
    }
    
    const blobsArray = Array.isArray(data) ? data : [data];
    
    return blobsArray;
  } catch (error) {
    console.log("Error Image Bucket: ", error);
    return []; // Devolvemos un array vacío en caso de error
  }
};
