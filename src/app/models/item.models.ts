export class Item {
    name: string;
    img: string;
    description: string;
    price: number;
    constructor(name, img, description, price){
        this.name = name;
        this.img = img;
        this.description = description;
        this.price = price;
    }
}