export class Item{
    public id:number;
    public type:string;
    public itemName:string;
    public price:number;
    public imageUrl:string;
    constructor(id:number, itemName:string, price:number, imageUrl:string){
        this.id = id;
        this.itemName = itemName;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}