import { createReducer, on } from '@ngrx/store';
import { CartState } from '../../states/app.states';
import * as fromActions from '../actions/cart.actions';

export const initialCartState: CartState = {
  productIds: [],
  quantityById: {},
  isOpen: false,
};

export const cartReducer = createReducer(
  initialCartState,

  on(fromActions.AddProductCart, (state: CartState, { productId }): CartState => {
    // Product already exists on cart
    if (state.productIds.indexOf(productId) !== -1) {
      return Object.assign({
        ...state,
        quantityById:
          Object.assign({}, state.quantityById, { [productId]: (state.quantityById[productId] || 0) + 1 })
      });
    }
    // Product doen't exist so we add it
    return Object.assign({
      ...state,
      productIds: [...state.productIds, productId],
      quantityById:
        Object.assign({}, state.quantityById,
          { [productId]: (state.quantityById[productId] || 0) + 1 }
        )
    });
  }),

  on(fromActions.RemoveProductCart, (state: CartState, { productId }): CartState => {
    const prodCount = state.quantityById[productId];
    if (prodCount && prodCount - 1 !== 0) {
      return Object.assign({
        ...state,
        quantityById:
          Object.assign({}, state.quantityById,
            { [productId]: (state.quantityById[productId] || 1) - 1 }
          )
      });
    }
    return Object.assign({
      ...state,
      productIds: state.productIds.filter((id) => id !== productId),
      quantityById:
        Object.assign({}, state.quantityById,
          { [productId]: 0 }
        )
    });
  }),

  on(fromActions.ClearCart, (state: CartState): CartState => {
    return {
      ...state,
      productIds: [],
      quantityById: {},
    }
  }),

  on(fromActions.ToggleCart, (state: CartState, { open }): CartState => {
    return {
      ...state,
      isOpen: open || !state.isOpen,
    }
  }),

);

