import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ToBag(){
    this.router.navigate(["bag"]);
  }

  ToListItems(){
    this.router.navigate(["listItem"]);
  }
}
