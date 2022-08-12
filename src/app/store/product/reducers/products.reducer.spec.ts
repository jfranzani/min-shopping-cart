import * as fromProduct from './products.reducer';
import * as fromActions from '../actions/product.actions';
import { Product } from 'src/app/core/models/product';

const product1: Product = {
  title: 'TheCodeBuzz', id: 1, category: 'someCat', image: 'simeUrl', description: 'someDesc', price: 20
};
const product2: Product = {
  title: 'TheCodeBuzz', id: 2, category: 'someCat2', image: 'simeUrl2', description: 'someDesc2', price: 550
};


describe('Add Product actions', () => {
  it('should add a product', () => {
    const { initialProductState } = fromProduct;
    const action = fromActions.AddProduct({ payload: { product: product1 } });
    const state = fromProduct.productReducer(initialProductState, action);
    expect(state.ids).toEqual([1]);
  });

  it('should add many products', () => {
    const { initialProductState } = fromProduct;
    const action = fromActions.LoadProductsSuccess({ payload: { products: [product1, product2] } });
    const state = fromProduct.productReducer(initialProductState, action);
    expect(state.ids).toEqual([1, 2]);
  });

  //TODO - Complete Unit testing

});

