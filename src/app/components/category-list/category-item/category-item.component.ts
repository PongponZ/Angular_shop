import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {
    @Input() category:{ id:number, title:string, imagePath:string };

    constructor(private router: Router ) { }

    ngOnInit(): void {
    }

    onClick(){
        this.router.navigate(['shop', this.category.title.toLowerCase()]);
    }
}
