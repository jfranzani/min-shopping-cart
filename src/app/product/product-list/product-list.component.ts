import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {

   @Input() productList: Product[] | null = [];


}
