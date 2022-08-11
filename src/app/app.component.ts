import { Component } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { AppState } from './store/states/app.states';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromCartSelector from '../app/store/cart/selectors/cart.selector';
import { ProductCart } from './core/models/cart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shopping Cart';
  showFiller = false;
  faCartShopping = faCartShopping;
  faLinkedin = faLinkedin;
  faGH = faGithub;

  public totalProductsOnCart$: Observable<ProductCart[]> = new Observable<ProductCart[]>;

  constructor(private store: Store<AppState>) {
    this.totalProductsOnCart$ = store.select(fromCartSelector.selectCurrentProducts);
  }

}
