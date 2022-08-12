import * as fromCart from './cart.reducer';
import * as fromActions from '../actions/cart.actions';

describe('AddProductCart action', () => {
    it('should set product ids', () => {
        const { initialCartState } = fromCart;
        const action = fromActions.AddProductCart({ productId: 1 });
        const state = fromCart.cartReducer(initialCartState, action);
        expect(state.productIds).toEqual([1]);
        expect(state.quantityById).toEqual({ 1: 1 });
    });

    it('should discount a product quantity by 1', () => {
        const { initialCartState } = fromCart;
        const previousState = {
            ...initialCartState, productIds: [1, 2], quantityById: {
                1: 10,
                2: 3
            }
        };
        const action = fromActions.RemoveProductCart({ productId: 1 });
        const state = fromCart.cartReducer(previousState, action);
        expect(state.productIds).toEqual([1, 2]);
        expect(state.quantityById).toEqual({ 1: 9, 2: 3 });
    });

    it('should remove a product if the quantity is 1', () => {
        const { initialCartState } = fromCart;
        const previousState = {
            ...initialCartState, productIds: [1, 2], quantityById: {
                1: 1,
                2: 3
            }
        };
        const action = fromActions.RemoveProductCart({ productId: 1 });
        const state = fromCart.cartReducer(previousState, action);
        expect(state.productIds).toEqual([2]);
        expect(state.quantityById).toEqual({ 1: 0, 2: 3 });
    });

    it('should clear the cart', () => {
        const { initialCartState } = fromCart;
        const previousState = {
            ...initialCartState, productIds: [1, 2], quantityById: {
                1: 1,
                2: 3
            }
        };
        const action = fromActions.ClearCart();
        const state = fromCart.cartReducer(previousState, action);
        expect(state.productIds).toEqual([]);
        expect(state.quantityById).toEqual({});
    });

    it('should toggle the cart', () => {
        const { initialCartState } = fromCart;
        const previousState = { ...initialCartState, isOpen: true };
        const action = fromActions.ToggleCart({ open: false });
        const state = fromCart.cartReducer(previousState, action);
        expect(state.isOpen).toBeFalse();
    });
});

