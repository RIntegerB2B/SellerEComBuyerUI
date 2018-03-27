import {SubCategory} from './subCategory.model';
export interface Category {
    _id: number,
    categoryName: string,
    subCategories : SubCategory[]
}

