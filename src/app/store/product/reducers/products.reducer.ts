import { createReducer, on } from '@ngrx/store';
import { ProductState } from '../../states/app.states';
import * as fromActions from '../actions/product.actions';
import * as fromAdapter from './product.adapter';

export const initialState: ProductState = fromAdapter.adapter.getInitialState({
  selectedProductId: null
});

// Creating reducer                        
export const productReducer = createReducer(
  initialState,
  on(fromActions.AddProduct, (state, { payload }) => fromAdapter.adapter.addOne(payload.product, state)),
  on(fromActions.AddProducts, (state, { payload }) => fromAdapter.adapter.addMany(payload.products, state)),
  on(fromActions.UpdateProduct, (state, { payload }) => fromAdapter.adapter.updateOne(payload.product, state)),
  on(fromActions.UpdateProducts, (state, { payload }) => fromAdapter.adapter.updateMany(payload.products, state)),
  on(fromActions.RemoveProduct, (state, { payload }) => fromAdapter.adapter.removeOne(payload.id, state)),
  on(fromActions.RemoveProducts, (state, { payload }) => fromAdapter.adapter.removeMany(payload.ids, state)),
  on(fromActions.ClearProducts, (state) => fromAdapter.adapter.removeAll({ ...state, selectedProductId: '' })),
  on(fromActions.LoadProductsSuccess, (state, { payload }) => {
    state = fromAdapter.adapter.removeAll({ ...state, selectedProductId: '' });
    return fromAdapter.adapter.addMany(payload.products, state);
  }),
  on(fromActions.SelectProduct, (state, { payload }) => Object.assign({ ...state, selectedProductId: payload.productId })),
);

