import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { CartItem } from 'src/app/models/cart.model';


//TODO Add delete
@Component({
  selector: 'app-check-out-list',
  templateUrl: './check-out-list.component.html',
  styleUrls: ['./check-out-list.component.css'],
})
export class CheckOutListComponent implements OnInit {
    sumPrice:number = 0;
    itemCart:CartItem[] = [];

    constructor(private cart:CartService) {}

    ngOnInit(): void {
        this.cart.getCartItem().subscribe( res => this.itemCart = res );
        this.cart.getCartPrice().subscribe( res => this.sumPrice = res );
    }
}
