import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/states/app.states';
import { ProductCart } from '../core/models/cart';
import { faMinus, faClose } from '@fortawesome/free-solid-svg-icons';
import * as fromProductActions from '../store/product/actions/product.actions';
import * as fromCartActions from '../store/cart/actions/cart.actions';
import * as fromCartSelector from '../store/cart/selectors/cart.selector';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit {

  public selectedProducts$: Observable<ProductCart[]> = new Observable<ProductCart[]>;
  public totalProducts$: Observable<number> = new Observable<number>;

  public removeIcon = faMinus;
  public closeIcon = faClose;
  public placeholderImg = '/assets/images/placeholder.png';

  constructor(private store: Store<AppState>) {
    this.selectedProducts$ = store.select(fromCartSelector.selectCurrentProducts);
    this.totalProducts$ = store.select(fromCartSelector.selectCurrentProductsTotalAmount);
  }

  ngOnInit(): void {
    this.store.dispatch(fromProductActions.LoadProducts());
  }

  closeCart(): void {
    this.store.dispatch(fromCartActions.ToggleCart({ open: false }));
  }

  onRemoveItem(productId: number): void {
    this.store.dispatch(fromCartActions.RemoveProductCart({ productId }))
  }
}
