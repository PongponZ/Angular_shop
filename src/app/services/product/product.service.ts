import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
    products = [
        { type:'hats', 
            items:[ 
                { id:1, name:'Brown Brim', price:199, imageUrl:'https://i.ibb.co/ZYW3VTp/brown-brim.png' },
                { id:2, name:'Blue Beanie', price:299, imageUrl:'https://i.ibb.co/ypkgK0X/blue-beanie.png' },
                { id:3, name:'Grey Brim', price:399, imageUrl:'https://i.ibb.co/RjBLWxB/grey-brim.png' },
                { id:4, name:'Palm Tree Cap', price:490, imageUrl:'https://i.ibb.co/rKBDvJX/palm-tree-cap.png' }]
        },
        { type:'jackets', 
            items:[ 
                { id:5, name:'Black Jean Shearling', price:490, imageUrl:'https://i.ibb.co/XzcwL5s/black-shearling.png' },
                { id:6, name:'Blue Jean Jacket', price:490, imageUrl:'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png' },
                { id:7, name:'Grey Jean Jacket', price:590, imageUrl:'https://i.ibb.co/N71k1ML/grey-jean-jacket.png' },
                { id:8, name:'Brown Shearling', price:690, imageUrl:'https://i.ibb.co/s96FpdP/brown-shearling.png' }]
        },
        { type:'sneakers', 
            items:[ 
                { id:9, name:'Adidas NMD', price:1290, imageUrl:'https://i.ibb.co/0s3pdnc/adidas-nmd.png' },
                { id:10, name:'Adidas Yeezy', price:2590, imageUrl:'https://i.ibb.co/dJbG1cT/yeezy.png' },
                { id:11, name:'Black Converse', price:3690, imageUrl:'https://i.ibb.co/bPmVXyP/black-converse.png' },
                { id:12, name:'Nike White AirForce', price:4500, imageUrl:'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png' }]
        }];

    constructor() { }

    getItems(nameType:string){
        return nameType ? this.products.filter(item => item.type == nameType) : this.products;
    }
}
