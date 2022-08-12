import { AppComponent } from './app.component';
import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { initialCartState } from '../app/store/cart/reducers/cart.reducer';
import { initialProductState } from '../app/store/product/reducers/products.reducer';
import { AppState } from '../app/store/states/app.states';
import * as fromCartActions from '../app/store/cart/actions/cart.actions';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('AppComponent', () => {
  let component: AppComponent;
  let store: MockStore;
  const initialState: AppState = {
    cartState: initialCartState,
    productState: initialProductState,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FontAwesomeModule,
      ],
      providers: [
        provideMockStore({ initialState }),
      ],
    }).compileComponents();
    const fixture = TestBed.createComponent(AppComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('dispatch actions', () => {
    it('call toggle cart action with false', () => {
      spyOn(store, 'dispatch');
      component.closeSidenav();
      expect(store.dispatch).toHaveBeenCalledWith(fromCartActions.ToggleCart({ open: false }));
    });

    it('call toggle cart action with true', () => {
      spyOn(store, 'dispatch');
      component.openSidenav();
      expect(store.dispatch).toHaveBeenCalledWith(fromCartActions.ToggleCart({ open: true }));
    });
  });

});
