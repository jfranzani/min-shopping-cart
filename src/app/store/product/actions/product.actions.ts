import { Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { Product } from "../../../core/models/product";

enum ProductActionTypes {
    ADD_PRODUCT = '[PRODUCT] Add Product',
    ADD_PRODUCTS = '[PRODUCT] Add Products',
    UPDATE_PRODUCT = '[PRODUCT] Update Product',
    UPDATE_PRODUCTS = '[PRODUCT] Update Products',
    REMOVE_PRODUCT = '[PRODUCT] Remove Product',
    REMOVE_PRODUCTS = '[PRODUCT] Remove Products',
    CLEAR_PRODUCTS = '[PRODUCT] Clear Products',
    LOAD_ALL_PRODUCTS = '[PRODUCT] Load All Products',
    LOAD_ALL_PRODUCTS_SUCCESS = '[PRODUCT] Load All Products Success',
    SELECT_PRODUCT = '[PRODUCT] Product By Id'
}

export const AddProduct = createAction(ProductActionTypes.ADD_PRODUCT,
    props<{ payload: { product: Product } }>());
export const AddProducts = createAction(ProductActionTypes.ADD_PRODUCTS,
    props<{ payload: { products: Product[] } }>());
export const UpdateProduct = createAction(ProductActionTypes.UPDATE_PRODUCT,
    props<{ payload: { product: Update<Product> } }>());
export const UpdateProducts = createAction(ProductActionTypes.UPDATE_PRODUCTS,
    props<{ payload: { products: Update<Product>[] } }>());
export const RemoveProduct = createAction(ProductActionTypes.REMOVE_PRODUCT,
    props<{ payload: { id: number } }>());
export const RemoveProducts = createAction(ProductActionTypes.REMOVE_PRODUCTS,
    props<{ payload: { ids: number[] } }>());
export const ClearProducts = createAction(ProductActionTypes.CLEAR_PRODUCTS);
export const LoadProducts = createAction(ProductActionTypes.LOAD_ALL_PRODUCTS);
export const LoadProductsSuccess = createAction(ProductActionTypes.LOAD_ALL_PRODUCTS_SUCCESS,
    props<{ payload: { products: Product[] } }>());
export const SelectProduct = createAction(ProductActionTypes.SELECT_PRODUCT,
    props<{ payload: { productId: string } }>()); 