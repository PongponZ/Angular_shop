import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
    @Input() id:number;
    @Input() itemName:string;
    @Input() price:number;
    @Input() imageUrl:string;

    constructor(private cart:CartService) { }

    ngOnInit(): void {

    }

    onClick(){
        this.cart.addItemToCart(new Item(this.id, this.itemName, this.price, this.imageUrl));
    }
}
