import { Component, ElementRef, ViewChild } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { AppState } from './store/states/app.states';
import { Store } from '@ngrx/store';
import { first, Observable } from 'rxjs';
import * as fromCartSelector from '../app/store/cart/selectors/cart.selector';
import * as fromCartActions from '../app/store/cart/actions/cart.actions';
import { ProductCart } from './core/models/cart';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('drawer') drawer!: MatDrawer;

  title = 'Shopping Cart';
  showFiller = false;
  faCartShopping = faCartShopping;
  faLinkedin = faLinkedin;
  faGH = faGithub;

  totalProductsOnCart$: Observable<ProductCart[]> = new Observable<ProductCart[]>;
  isCartOppened$: Observable<boolean> = new Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.totalProductsOnCart$ = store.select(fromCartSelector.selectCurrentProducts);
    this.isCartOppened$ = store.select(fromCartSelector.selectIsCartOpen);
  }

  closeSidenav(): void {
    this.store.dispatch(fromCartActions.ToggleCart({ open: false }));
  }

  openSidenav(): void {
    this.store.dispatch(fromCartActions.ToggleCart({ open: true }));
  }

  toggleSidenav(): void {
    this.isCartOppened$.pipe(first()).subscribe(open => {
      if (open) {
        return this.closeSidenav();
      }
      this.openSidenav();
    });
  }

}
