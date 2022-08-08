import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { ColorDirective } from './Directive/color.directive';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SlicePipe } from './pipes/slice.pipe';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NewProductComponent } from './new-product/new-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FavProductsComponent } from './fav-products/fav-products.component';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    ColorDirective,
    ProductListComponent,
    ProductCardComponent,
    SlicePipe,
    ProductDetailsComponent,
    NewProductComponent,
    NavbarComponent,
    FavProductsComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
/*

1- template driven forms => most of business in html file => simple not complex.
2- reactive form => most business in ts or js file => complex business.

*/
