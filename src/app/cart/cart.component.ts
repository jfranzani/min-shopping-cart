import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductState } from '../store/states/app.states';
import { ProductCart } from '../core/models/cart';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
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
  public placeholderImg = '/assets/images/placeholder.png';

  constructor(private store: Store<ProductState>) {
    this.selectedProducts$ = store.select(fromCartSelector.selectCurrentProducts);
    this.totalProducts$ = store.select(fromCartSelector.selectCurrentProductsTotalAmount);
  }

  ngOnInit(): void {
    this.store.dispatch(fromProductActions.LoadProducts());
  }

  onRemoveItem(productId: number): void {
    this.store.dispatch(fromCartActions.RemoveProductCart({ productId }))
  }
}
