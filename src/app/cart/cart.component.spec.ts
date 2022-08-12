import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import * as fromCartActions from '../store/cart/actions/cart.actions';
import * as fromProductActions from '../store/product/actions/product.actions';
import { initialCartState } from '../store/cart/reducers/cart.reducer';
import { initialProductState } from '../store/product/reducers/products.reducer';
import { AppState } from '../store/states/app.states';
import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let store: MockStore;
  const initialState: AppState = {
    cartState: initialCartState,
    productState: initialProductState,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartComponent],
      providers: [
        provideMockStore({ initialState }),
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('ngOninit function', () => {
    it('it should load the products', () => {
      spyOn(store, 'dispatch');
      component.ngOnInit();
      expect(store.dispatch).toHaveBeenCalledWith(fromProductActions.LoadProducts());
    });
  });

  describe('dispatch actions', () => {
    it('call toggle action with false', () => {
      spyOn(store, 'dispatch');
      component.closeCart();
      expect(store.dispatch).toHaveBeenCalledWith(fromCartActions.ToggleCart({ open: false }));
    });

    it('should call the remove item action', () => {
      spyOn(store, 'dispatch');
      component.onRemoveItem(1);
      expect(store.dispatch).toHaveBeenCalledWith(fromCartActions.RemoveProductCart({ productId: 1 }));
    });
  });
});
