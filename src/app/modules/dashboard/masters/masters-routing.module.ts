import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MastersComponent } from './masters.component';
import { accountGuard } from 'src/app/services/account.guard';
import { AddProductCategoryComponent } from './add-product-category/add-product-category.component';
import { ProductCategoryComponent } from './product-category/product-category.component';

const routes: Routes = [
  { path: '', component: MastersComponent, canActivate:[accountGuard] },
  { path: 'product_categories', component: ProductCategoryComponent, canActivate:[accountGuard] },
  { path: 'add_product_category', component: AddProductCategoryComponent, canActivate:[accountGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersRoutingModule { }
