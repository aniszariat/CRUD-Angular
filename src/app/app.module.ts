import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PODUITS_ROUTING } from './app.routing';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    AddProduitComponent
  ],
  imports: [
    BrowserModule,FormsModule,PODUITS_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
