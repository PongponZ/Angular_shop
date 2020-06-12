export class CartItem{
    public id:number;
    public type:string;
    public itemName:string;
    public price:number;
    public imageUrl:string;
    public quantity:number
    constructor(id:number, itemName:string, price:number, imageUrl:string, quantity:number){
        this.id = id;
        this.itemName = itemName;
        this.price = price;
        this.imageUrl = imageUrl;
        this.quantity = quantity
    }
}