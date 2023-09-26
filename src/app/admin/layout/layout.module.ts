import { NgModule } from '@angular/core';                //oluşturmak için ng(angular) g(generate) m(module) admin/layout  yazdık.
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [
    LayoutComponent
  ],  
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    MatSidenavModule
  ],
  exports:[
    LayoutComponent       //componentlere dışardan erişilebilsin diye export ettik.
  ]
})
export class LayoutModule { } 
