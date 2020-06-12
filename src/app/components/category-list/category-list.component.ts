import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

    categorys:Category[] = [
        new Category(1,"HATS","https://i.ibb.co/cvpntL1/hats.png"),
        new Category(2,"JACKETS","https://i.ibb.co/px2tCc3/jackets.png"),
        new Category(3,"SNEAKERS","https://i.ibb.co/0jqHpnp/sneakers.png")
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
