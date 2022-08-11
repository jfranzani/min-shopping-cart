import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductCart } from "src/app/core/models/cart";
import { selectProductEntities } from "../../product/selectors/product.selectors";
import { CartState } from "../../states/app.states";

const getCartState = createFeatureSelector<CartState>('cartState');
const getSelectedCartProductsIds = (state: CartState) => state.productIds;
const getCartQuantityById = (state: CartState) => state.quantityById;
const getIsOpen = (state: CartState) => state.isOpen;

export const selectCartProductIds = createSelector(getCartState, getSelectedCartProductsIds);
export const selectCartQuantityByIds = createSelector(getCartState, getCartQuantityById);
export const selectIsCartOpen = createSelector(getCartState, getIsOpen);

export const selectCurrentProducts = createSelector(
    selectProductEntities,
    selectCartProductIds,
    selectCartQuantityByIds,
    (productEntities, productIds, quantityById) => {
        if (productIds?.length > 0) {
            const cartProducts: ProductCart[] = [];
            for (const id of productIds) {
                cartProducts.push({ ...productEntities[id], quantity: quantityById[id] || 0 } as ProductCart);
            }
            return cartProducts;
        } else
            return [];
    }
);

export const selectCurrentProductsTotalAmount = createSelector(
    selectCurrentProducts,
    (currentProducts): number => {
        let total = 0;
        for (const prod of currentProducts) {
            total += prod.price * prod.quantity;
        }
        return total;
    }
); 
