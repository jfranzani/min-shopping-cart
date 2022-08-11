import { createReducer, on } from '@ngrx/store';
import { ProductState } from '../../states/app.states';
import * as fromActions from '../actions/product.actions';
import * as fromAdapter from './product.adapter';

export const initialState: ProductState = fromAdapter.adapter.getInitialState({
  selectedProductsIds: []
});

// Creating reducer                        
export const productReducer = createReducer(
  initialState,
  on(fromActions.AddProduct, (state: ProductState, { payload }): ProductState => fromAdapter.adapter.addOne(payload.product, state)),
  on(fromActions.AddProducts, (state: ProductState, { payload }): ProductState => fromAdapter.adapter.addMany(payload.products, state)),
  on(fromActions.UpdateProduct, (state: ProductState, { payload }): ProductState => fromAdapter.adapter.updateOne(payload.product, state)),
  on(fromActions.UpdateProducts, (state: ProductState, { payload }): ProductState => fromAdapter.adapter.updateMany(payload.products, state)),
  on(fromActions.RemoveProduct, (state: ProductState, { payload }): ProductState => fromAdapter.adapter.removeOne(payload.id, state)),
  on(fromActions.RemoveProducts, (state: ProductState, { payload }): ProductState => fromAdapter.adapter.removeMany(payload.ids, state)),
  on(fromActions.ClearProducts, (state: ProductState): ProductState => fromAdapter.adapter.removeAll({ ...state, selectedProductId: '' })),
  on(fromActions.LoadProductsSuccess, (state: ProductState, { payload }): ProductState => {
    state = fromAdapter.adapter.removeAll({ ...state, selectedProductId: '' });
    return fromAdapter.adapter.addMany(payload.products, state);
  }),
);

