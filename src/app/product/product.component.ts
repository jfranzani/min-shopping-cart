import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductState } from '../store/states/app.states';
import * as fromProductActions from '../store/product/actions/product.actions';
import * as fromProductSelector from '../store/product/selectors/product.selectors';
import { Observable } from 'rxjs';
import { Product } from '../core/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  public allProducts$: Observable<Product[]> = new Observable<Product[]>;

  constructor(private store: Store<ProductState>) {
    this.allProducts$ = store.select(fromProductSelector.selectAllProducts);
  }

  ngOnInit(): void {
    this.store.dispatch(fromProductActions.LoadProducts());
  }

}
