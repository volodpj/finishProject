import { Item } from "../models/item.models";

export class BagService{
    items: Item[] = [];

    addItemToBag(item: Item){
        this.items.push(item);
        localStorage.setItem("bagItems", JSON.stringify(this.items));
    };

    deleteItemFromBag(i: number){
        if(i > -1){
            this.items.splice(i, 1);
            localStorage.setItem("bagItems", JSON.stringify(this.items));
        }
    }

    makeOrder(){
        console.log("yor");
    }

    getItems(){
        this.items = JSON.parse(localStorage.getItem("bagItems"));
        return this.items;
    }

}