import { RouterModule, Routes } from "@angular/router";
import { AddProduitComponent } from "./add-produit/add-produit.component";
import { ProduitsComponent } from "./produits/produits.component";

const routes: Routes =[
    {path:"produits", component: ProduitsComponent},
    {path:"add-produit", component:AddProduitComponent},
    {path:"", redirectTo:"produits" , pathMatch:"full"},
]
export const PODUITS_ROUTING = RouterModule.forRoot(routes)