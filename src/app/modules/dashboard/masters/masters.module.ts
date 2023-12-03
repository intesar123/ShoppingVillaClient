import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MastersRoutingModule } from './masters-routing.module';
import { MastersComponent } from './masters.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { AddProductCategoryComponent } from './add-product-category/add-product-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsComponent } from './products/products.component';
import { BrandsComponent } from './brands/brands.component';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { UnitMasterComponent } from './unit/unit-master/unit-master.component';
import { AddUnitComponent } from './unit/add-unit/add-unit.component';


@NgModule({
  declarations: [
    MastersComponent,
    ProductCategoryComponent,
    AddProductCategoryComponent,
    AddProductComponent,
    ProductsComponent,
    BrandsComponent,
    AddBrandComponent,
    UnitMasterComponent,
    AddUnitComponent,
  ],
  imports: [
    CommonModule,
    MastersRoutingModule,
    ReactiveFormsModule
  ]
})
export class MastersModule { }
