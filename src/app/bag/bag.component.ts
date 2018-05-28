import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.models';
import { BagService } from '../service/bag.service';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {

  items: Item[] = [];
  constructor(private bagService: BagService) { }

  ngOnInit() {
    this.items = this.bagService.getItems();
  }

  deleteItem(i){
    this.bagService.deleteItemFromBag(i);
  }
}
