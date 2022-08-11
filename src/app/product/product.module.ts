import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
    MatSnackBarModule,
  ]
})
export class ProductModule { }
