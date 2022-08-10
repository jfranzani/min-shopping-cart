import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';
import * as fromActions from '../actions/product.actions';

@Injectable()
export class ProductEffects {

    loadAllProducts$ = createEffect(() => this.actions$.pipe(
        ofType(fromActions.LoadProducts),
        switchMap(() =>
            this.productService.getAllProducts().pipe(
                map(data => fromActions.LoadProductsSuccess({ payload: { products: data } }))
            )
        )
    ));

    constructor(
        private actions$: Actions,
        private productService: ProductService,
    ) { }

} 