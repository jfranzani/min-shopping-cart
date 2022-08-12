import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import * as fromCartActions from '../store/cart/actions/cart.actions';
import * as fromProductActions from '../store/product/actions/product.actions';
import { initialCartState } from '../store/cart/reducers/cart.reducer';
import { initialProductState } from '../store/product/reducers/products.reducer';
import { AppState } from '../store/states/app.states';
import { ProductComponent } from './product.component';
import { Product } from '../core/models/product';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let store: MockStore;
  const initialState: AppState = {
    cartState: initialCartState,
    productState: initialProductState,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent],
      providers: [
        provideMockStore({ initialState }),
      ],
      imports: [
        MatSnackBarModule,
        BrowserAnimationsModule,
        MatTooltipModule,
        FontAwesomeModule,
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
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

  describe('onAddProduct function', () => {
    it('dispatch AddProductCart action', () => {
      // Arrange
      spyOn(store, 'dispatch');
      const mockedProduct: Product = { title: 'TheCodeBuzz', id: 1, category: 'someCat', image: 'simeUrl', description: 'someDesc', price: 20 };
      // Action
      component.onAddProduct(mockedProduct);
      // Assert
      expect(store.dispatch).toHaveBeenCalledWith(fromCartActions.AddProductCart({ productId: 1 }));
    });
  });

});
