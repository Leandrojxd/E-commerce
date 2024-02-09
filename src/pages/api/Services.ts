import supabase from "@/pages/api/supabase";
import { CategoriesData, ImageAssets, ProductsData, SingleProductInfo } from "./DataType";
import { ReserveProduct } from "./DataContext";

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

export const serviceFetchProductsByCategory = async (Category_id:string): Promise<ProductsData[]> => {
  const {data, error} = await supabase.from('Products').select('*').eq('Category_id',Category_id);
  if(error){
    console.log("Error fetch products by category_id")
  }
  return data as ProductsData[]; 
}

//GET TOTAL PRICE FROM RESERVE PRODUCTS
export const getTotalPriceFromShoppingCartProducts = (reserveProducts: ReserveProduct[]): number => {
  if (reserveProducts.length === 0) {
    return 0; 
  }
  const totalPrice: number = reserveProducts.reduce((total, { productPrice }) => {
    return total + parseFloat(productPrice as string);
  }, 0);
  return parseFloat(totalPrice.toFixed(2))
};

export const getCategoryName = async (Category_id:string): Promise<string> => {
  const {data,error} = await supabase.from('Category').select('Name').eq('Category_id',Category_id).single();
  if(error){
    console.log("Error fetch category name")
  }
  console.log(data)
  return data?.Name as string;
}