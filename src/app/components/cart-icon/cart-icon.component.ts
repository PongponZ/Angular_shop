import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.css']
})
export class CartIconComponent implements OnInit {
    itemCount:number = 0;
    isToggle:boolean = false;
    constructor(private cart:CartService) { }

    ngOnInit(): void {
    
        this.cart.getItemCount().subscribe(res => { 
            this.itemCount = res;
        });
    }

    onClick(){
        this.cart.setToggle(!this.isToggle);
        this.isToggle = !this.isToggle;
    }
}
