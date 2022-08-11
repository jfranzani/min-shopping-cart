import { EntityState } from "@ngrx/entity";
import { Dictionary } from "@ngrx/entity/src/models";
import { Product } from "../../core/models/product";
import { ActionReducerMap } from '@ngrx/store';
import * as productReducer from '../product/reducers/products.reducer';
import * as cartReducer from '../cart/reducers/cart.reducer';

export interface AppState {
    productState: ProductState;
    cartState: CartState;
}

export interface ProductState extends EntityState<Product> {
    selectedProductsIds: number[];
}
export interface CartState {
    productIds: number[];
    quantityById: Dictionary<number>;
    isOpen: boolean;
}

export const reducers: ActionReducerMap<AppState> = {
    productState: productReducer.productReducer,
    cartState: cartReducer.cartReducer,
}; 