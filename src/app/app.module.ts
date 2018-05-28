import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ItemComponent } from './item/item.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { ItemService } from './service/items.service';
import { BagComponent } from './bag/bag.component';
import { BagService } from './service/bag.service';
import { RouterModule, } from '@angular/router';
import { ROUTES } from './app.routs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ItemComponent,
    ListItemsComponent,
    BagComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ItemService, BagService],
  bootstrap: [AppComponent]
})
export class AppModule { }
