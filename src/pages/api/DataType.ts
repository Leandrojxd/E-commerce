
export interface CategoriesData  {
    name: string,
    description: string,
    imgSource?: string,
}

export class Product implements CategoriesData{
    name: string;
    description: string;
    imgSource?: string;
    
    constructor(){
        this.name = '';
        this.description = '';
    }
    set setName(value:string){
        this.name = value;
    }
    set setDescription(value:string){
        this.description = value;
    }
    set setImageSource(value:string){
        this.imgSource = value;
    }

    get getName():string {
        return this.name;
    }
    get getDescription():string {
        return this.description;
    }
    get getImageSource():string {
        return this.imgSource!;
    }
}