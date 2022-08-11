import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "src/app/core/models/product";
import { ProductState } from "../../states/app.states";
import * as fromAdapter from '../reducers/product.adapter';

export const getSelectedProductsIds = (state: ProductState) => state.selectedProductsIds;

export const getProductState = createFeatureSelector<ProductState>('productState');

export const selectProductIds = createSelector(getProductState, fromAdapter.selectProductIds);
export const selectProductEntities = createSelector(getProductState, fromAdapter.selectProductEntities);
export const selectAllProducts = createSelector(getProductState, fromAdapter.selectAllProducts);
export const productsCount = createSelector(getProductState, fromAdapter.productsCount);

export const selectCurrentProductsIds = createSelector(getProductState, getSelectedProductsIds);

export const selectCurrentProducts = createSelector(
    selectProductEntities,
    selectCurrentProductsIds,
    (productEntities, productIds) => {
        const products: Product[] = [];
        for (const id of productIds) {
            products.push(productEntities[id] as Product);
        }
        return products;
    }
); 