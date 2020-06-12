import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { CartItem } from 'src/app/models/cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-dropdown',
  templateUrl: './cart-dropdown.component.html',
  styleUrls: ['./cart-dropdown.component.css']
})
export class CartDropdownComponent implements OnInit {
    isToggle:boolean = false;
    cartItem:CartItem[];
    constructor(private cart:CartService, private router: Router) { }

    ngOnInit(): void {
        this.cart.isToggle().subscribe( res => { this.isToggle = res; });
        this.cart.getCartItem().subscribe(res => { this.cartItem = res} );
    }

    onClick(){
        this.cart.setToggle(false);
        this.router.navigate(['checkout']);
    }
}
