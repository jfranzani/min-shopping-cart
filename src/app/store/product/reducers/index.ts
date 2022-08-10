import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../../states/app.states';
import * as reducer from './products.reducer';


export const reducers: ActionReducerMap<AppState> = {
    productState: reducer.productReducer
}; 