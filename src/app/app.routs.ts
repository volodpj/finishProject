import { Routes } from "@angular/router"
import { MainComponent } from "./main/main.component";
import { BagComponent } from "./bag/bag.component";
import { ListItemsComponent } from "./list-items/list-items.component";

export const ROUTES: Routes = [
    {path: "main", component: MainComponent},
    {path: "bag", component: BagComponent },
    {path: "listItem", component: ListItemsComponent}
]