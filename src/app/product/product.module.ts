import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product.component';
import { MatTooltipModule } from '@angular/material/tooltip';




@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
  ]
})
export class ProductModule { }
