import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';
import * as fromActions from '../actions/product.actions';

@Injectable()
export class ProductEffects {

    loadAllProducts$ = createEffect(() => this.actions$.pipe(
        ofType(fromActions.LoadProducts),
        switchMap(() =>
            this.productService.getAllProducts().pipe(
                map(data => fromActions.LoadProductsSuccess({ payload: { products: data } }))
            ),
            // TODO Catch Error - create action for this
        )
    ));

    constructor(
        private actions$: Actions,
        private productService: ProductService,
    ) { }

} 