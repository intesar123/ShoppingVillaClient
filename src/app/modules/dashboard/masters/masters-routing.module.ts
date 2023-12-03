import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MastersComponent } from './masters.component';
import { accountGuard } from 'src/app/services/account.guard';
import { AddProductCategoryComponent } from './add-product-category/add-product-category.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { BrandsComponent } from './brands/brands.component';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { UnitMasterComponent } from './unit/unit-master/unit-master.component';
import { AddUnitComponent } from './unit/add-unit/add-unit.component';

const routes: Routes = [
  { path: '', component: MastersComponent, canActivate:[accountGuard] },
  { path: 'product_categories', component: ProductCategoryComponent, canActivate:[accountGuard] },
  { path: 'add_product_category', component: AddProductCategoryComponent, canActivate:[accountGuard] },
  { path: 'edit_product_category', component: AddProductCategoryComponent, canActivate:[accountGuard] },
  { path: 'add_product', component: AddProductComponent, canActivate:[accountGuard] },
  { path: 'edit_product', component: AddProductComponent, canActivate:[accountGuard] },
  { path: 'products', component: ProductsComponent, canActivate:[accountGuard] },
  { path: 'add_brand', component: AddBrandComponent, canActivate:[accountGuard] },
  { path: 'edit_brand', component: AddBrandComponent, canActivate:[accountGuard] },
  { path: 'brands', component: BrandsComponent, canActivate:[accountGuard] },
  { path: 'units', component: UnitMasterComponent, canActivate:[accountGuard] },
  { path: 'add_unit', component: AddUnitComponent, canActivate:[accountGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersRoutingModule { }
