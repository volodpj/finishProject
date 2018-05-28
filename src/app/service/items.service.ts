import { Injectable } from "@angular/core";
import { Item } from "../models/item.models";

@Injectable()
export class ItemService {
    private items: Item[] = [
        new Item("apple","https://cdn4.iconfinder.com/data/icons/BRILLIANT/education_icons/png/128/teachers_day.png","apple red",50),
        new Item("apple","https://cdn4.iconfinder.com/data/icons/BRILLIANT/education_icons/png/128/teachers_day.png","apple red",50),
        new Item("apple","https://cdn4.iconfinder.com/data/icons/BRILLIANT/education_icons/png/128/teachers_day.png","apple red",50),
        new Item("apple","https://cdn4.iconfinder.com/data/icons/BRILLIANT/education_icons/png/128/teachers_day.png","apple red",50),
        new Item("apple","https://cdn4.iconfinder.com/data/icons/BRILLIANT/education_icons/png/128/teachers_day.png","apple red",50),
        new Item("apple","https://cdn4.iconfinder.com/data/icons/BRILLIANT/education_icons/png/128/teachers_day.png","apple red",50),
        new Item("apple","https://cdn4.iconfinder.com/data/icons/BRILLIANT/education_icons/png/128/teachers_day.png","apple red",50),
        new Item("apple","https://cdn4.iconfinder.com/data/icons/BRILLIANT/education_icons/png/128/teachers_day.png","apple red",50),
        new Item("apple","https://cdn4.iconfinder.com/data/icons/BRILLIANT/education_icons/png/128/teachers_day.png","apple red",50),
        new Item("apple","https://cdn4.iconfinder.com/data/icons/BRILLIANT/education_icons/png/128/teachers_day.png","apple red",50),
        new Item("apple","https://cdn4.iconfinder.com/data/icons/BRILLIANT/education_icons/png/128/teachers_day.png","apple red",50),
        new Item("apple","https://cdn4.iconfinder.com/data/icons/BRILLIANT/education_icons/png/128/teachers_day.png","apple red",50),
        new Item("apple","https://cdn4.iconfinder.com/data/icons/BRILLIANT/education_icons/png/128/teachers_day.png","apple red",50),
        new Item("apple","https://cdn4.iconfinder.com/data/icons/BRILLIANT/education_icons/png/128/teachers_day.png","apple red",50),
        new Item("apple","https://cdn4.iconfinder.com/data/icons/BRILLIANT/education_icons/png/128/teachers_day.png","apple red",50),
    ];
    getItems(){
        return this.items;
    }
}