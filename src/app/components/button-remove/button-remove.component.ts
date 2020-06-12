import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-button-remove',
  templateUrl: './button-remove.component.html',
  styleUrls: ['./button-remove.component.css']
})
export class ButtonRemoveComponent implements OnInit {

    @Input() itemID:number;

    constructor(private cart:CartService) { }

    ngOnInit(): void {
    }

    onClickRemove(){
        this.cart.removeCartItem(this.itemID);
    }
}
