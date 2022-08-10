import * as fromProductReducer from './products.reducer';

describe('Product Entity Reducer', () => {
  it('should be defined', () => {
    expect(fromProductReducer.productReducer).toBeDefined();
  });
});