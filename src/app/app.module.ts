import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
/*
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
*/
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryItemComponent } from './components/category-list/category-item/category-item.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import { CartDropdownComponent } from './components/cart-dropdown/cart-dropdown.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { LoginComponent } from './pages/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FooterComponent } from './components/footer/footer.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { CheckOutListComponent } from './components/check-out-list/check-out-list.component';
import { ButtonRemoveComponent } from './components/button-remove/button-remove.component';



const appRoutes: Routes = [
    { path:'', component: HomeComponent },
    { path:'shop', component: ShopComponent },
    { path:'shop/:title', component: ShopComponent },
    { path:'about', component: AboutComponent },
    { path:'login', component: LoginComponent },
    { path:'checkout', component: CheckOutComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ShopComponent,
    AboutComponent,
    ProductListComponent,
    CategoryListComponent,
    CategoryItemComponent,
    ProductItemComponent,
    CartIconComponent,
    CartDropdownComponent,
    CartItemComponent,
    LoginComponent,
    SignInComponent,
    SignUpComponent,
    FooterComponent,
    CheckOutComponent,
    CheckOutListComponent,
    ButtonRemoveComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
