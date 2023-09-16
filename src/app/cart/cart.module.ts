import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartViewComponent } from './cart-view/cart-view.component';
import { MatCardModule } from '@angular/material/card';
import {  MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CartViewComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    FormsModule
  ]
})
export class CartModule { }
