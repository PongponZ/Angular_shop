export class Category{
    public id:number;
    public title:string;
    public imagePath:string;

    constructor(id:number, title:string, imagePath:string){
        this.id = id;
        this.title = title;
        this.imagePath = imagePath;
    }

}