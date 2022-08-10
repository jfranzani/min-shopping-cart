import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "../../states/app.states";
import * as fromAdapter from '../reducers/product.adapter';

export const getSelectedProductId = (state: ProductState) => state.selectedProductId;

export const getProductState = createFeatureSelector<ProductState>('productState');

export const selectProductIds = createSelector(getProductState, fromAdapter.selectProductIds);
export const selectProductEntities = createSelector(getProductState, fromAdapter.selectProductEntities);
export const selectAllProducts = createSelector(getProductState, fromAdapter.selectAllProducts);
export const productsCount = createSelector(getProductState, fromAdapter.productsCount);

export const selectCurrentProductId = createSelector(getProductState, getSelectedProductId);

export const selectCurrentProduct = createSelector(
    selectProductEntities,
    selectCurrentProductId,
    (productEntities, productId) => productEntities[productId || 0]
); 