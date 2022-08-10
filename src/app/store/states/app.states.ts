import { EntityState } from "@ngrx/entity";
import { Product } from "../../core/models/product";


export interface AppState {
    productState: ProductState;
}

export interface ProductState extends EntityState<Product> {
    selectedProductId: string | null;
}