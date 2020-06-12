import { Injectable } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { Subject, Observable,BehaviorSubject } from 'rxjs';
import { CartItem } from 'src/app/models/cart.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {
    private isToggleSubscribe:Subject<boolean> = new Subject<boolean>();
    private itemCountSubscribe:Subject<number> = new Subject<number>();
    private cartSubscribe:BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);
    private cartPriceSubscribe:BehaviorSubject<number> = new BehaviorSubject<number>(0);
    private cartPrice:number = 0;
    private itemCount:number = 0;
    private cartItem:CartItem[] = [];

    constructor() {
        this.itemCountSubscribe.next(this.itemCount);
        this.isToggleSubscribe.next(false);
    }

    addItemToCart(items:Item){
        const index = this.cartItem.findIndex( item => item.id === items.id);

        //check exist item
        if(index !== -1){
            this.cartItem[index] = new CartItem(items.id,items.itemName,items.price,items.imageUrl, this.cartItem[index].quantity + 1);
        
        }else{
            this.cartItem.push(new CartItem(items.id,items.itemName,items.price,items.imageUrl, 1));
        }

        //cal price
        this.cartPrice += items.price;

        //count item
        this.itemCount++;

        //add to Subscribe
        this.itemCountSubscribe.next(this.itemCount);
        this.cartSubscribe.next(this.cartItem);
        this.cartPriceSubscribe.next(this.cartPrice);
    }

    removeCartItem(id:number){
        const index = this.cartItem.findIndex( item => item.id === id);

        this.cartPrice = this.cartPrice- (this.cartItem[index].price * this.cartItem[index].quantity);
        this.itemCount = this.itemCount - this.cartItem[index].quantity;
        this.cartItem = this.cartItem.filter(item => item.id !== id);

        //add to Subscribe
        this.itemCountSubscribe.next(this.itemCount);
        this.cartSubscribe.next(this.cartItem);
        this.cartPriceSubscribe.next(this.cartPrice);
    }
    getCartPrice(){
        return this.cartPriceSubscribe.asObservable();
    }

    getCartItem(){
        return this.cartSubscribe.asObservable();
    }
    
    getItemCount(){
        return this.itemCountSubscribe.asObservable();
    }

    isToggle(){
        return this.isToggleSubscribe.asObservable();
    }

    setToggle(toggle:boolean){
        this.isToggleSubscribe.next(toggle);
    }
}
