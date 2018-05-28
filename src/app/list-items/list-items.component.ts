import { Component, OnInit } from '@angular/core';
import { ItemService } from '../service/items.service';
import { Item } from '../models/item.models';
import { BagService } from '../service/bag.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  items: Item[] = [];
  constructor(private itemService: ItemService, private bagService: BagService) { }

  ngOnInit() {
    this.items = this.itemService.getItems();
  }

  addToBag(element){
    this.bagService.addItemToBag(element)
  }
}
