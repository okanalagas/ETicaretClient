import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: CustomersComponent } //customer diye bir istek gelirse bu componenti dönder
    ])
  ]
})
export class CustomersModule { }