import { createAction, props } from "@ngrx/store";

export enum CartActionTypes {
    ADD_PRODUCT_CART = '[CART] Add Product to cart',
    REMOVE_PRODUCT_CART = '[CART] Remove Product from cart',
    CLEAR_CART = '[CART] Clear cart',
    TOGGLE_CART = '[CART] Open/Close cart',
}

export const AddProductCart = createAction(CartActionTypes.ADD_PRODUCT_CART,
    props<{ productId: number }>());

export const RemoveProductCart = createAction(CartActionTypes.REMOVE_PRODUCT_CART,
    props<{ productId: number }>());

export const ClearCart = createAction(CartActionTypes.CLEAR_CART);

export const ToggleCart = createAction(CartActionTypes.TOGGLE_CART,
    props<{ open: boolean }>());