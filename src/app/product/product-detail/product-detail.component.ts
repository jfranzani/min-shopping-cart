import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent {

  @Input() product: Product | undefined;

  @Output() addProduct: EventEmitter<Product> = new EventEmitter<Product>()

  placeholderImg = '/assets/images/placeholder.png';

}
