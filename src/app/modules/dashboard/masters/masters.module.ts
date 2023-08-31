import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MastersRoutingModule } from './masters-routing.module';
import { MastersComponent } from './masters.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { AddProductCategoryComponent } from './add-product-category/add-product-category.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MastersComponent,
    ProductCategoryComponent,
    AddProductCategoryComponent,
  ],
  imports: [
    CommonModule,
    MastersRoutingModule,
    ReactiveFormsModule
  ]
})
export class MastersModule { }
