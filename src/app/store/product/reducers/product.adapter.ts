import { EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Product } from "../../../core/models/product";

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({
    sortComparer: false
});

export const {
    selectIds: selectProductIds,
    selectEntities: selectProductEntities,
    selectAll: selectAllProducts,
    selectTotal: productsCount
} = adapter.getSelectors(); 