import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/product/effects/product.effects';
import { HttpClientModule } from '@angular/common/http';
import { reducers } from './store/states/app.states';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ProductModule,
    CartModule,
    MatSidenavModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ProductEffects]),
    StoreDevtoolsModule.instrument(),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
