import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { StoreModule, ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

import { cartReducer as cart } from './reducers';

const reducers: ActionReducerMap<any> = { cart };

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['cart'], rehydrate: true})(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

const appRoutes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products/:id', component: ProductComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NotFoundComponent,
    ProductComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
