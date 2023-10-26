import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { TestComponent } from './test/test.component';
import { TestClassComponent } from './test-class/test-class.component';
import { ParentComponent } from './components/parent/parent.component';
import { ProductsComponent } from './components/products/products.component';
import { PipeComponent } from './pipe/pipe.component';
import { FormComponent } from './components/form/form.component';
import { CsvComponent } from './components/csv/csv.component';

const routes: Routes = [
  {path : "user", component:UserComponent},
  {path : "test", component:TestComponent},
  {path : "class", component:TestClassComponent},
  {path : "parent", component:ParentComponent},
  {path : "products", component:ProductsComponent},
  {path : "pipe", component:PipeComponent},
  {path : "form", component:FormComponent},
  {path : "csv", component:CsvComponent},

  {path : "**", component:UserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
