import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  title:string;
  mytitle = [{type:"hats"},{type:"jackets"},{type:"sneakers"}];
  constructor(private routes:ActivatedRoute) { }

  ngOnInit(): void {
    this.title = this.routes.snapshot.params['title'];
    switch (this.title) {
        case 'hats':
            this.mytitle = [{type:'hats'}];
            break;
        case 'jackets':
            this.mytitle = [{type:'jackets'}];
            break;
        case 'sneakers':
            this.mytitle = [{type:'sneakers'}];
            break;
        default:
            break;
    }
  }

}
