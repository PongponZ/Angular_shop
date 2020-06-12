import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[ProductService]
})
export class ProductListComponent implements OnInit {
    @Input() titlePath:string;
    items=[];
    myItems=[];
    constructor(private productServices:ProductService) { }

    ngOnInit(): void {
        this.items = this.productServices.getItems(this.titlePath).map(item => item.items);
        this.items.forEach(items => {
            this.myItems=items;
        });
    }

}
