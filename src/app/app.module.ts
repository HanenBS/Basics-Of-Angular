import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { TestClassComponent } from './test-class/test-class.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ProductsComponent } from './components/products/products.component';
import { PipeComponent } from './pipe/pipe.component';
import { FormComponent } from './components/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { CsvComponent } from './components/csv/csv.component';
import { SendComponent } from './components/behavior/send/send.component';
import { ReceiveComponent } from './components/behavior/receive/receive.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    UserComponent,
    HeaderComponent,
    TestClassComponent,
    ParentComponent,
    ChildComponent,
    ProductsComponent,
    PipeComponent,
    FormComponent,
    CsvComponent,
    SendComponent,
    ReceiveComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
