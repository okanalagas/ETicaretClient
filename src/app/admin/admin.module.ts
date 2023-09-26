import { NgModule } from '@angular/core';       //oluşturmak için ng(angular) g(generate) m(module) admin  yazdık.
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,  //import ettik.
    ComponentsModule
  ],
  exports:[
    LayoutModule      //componentlere dışardan erişilebilsin diye bir dışa export ettik
  ]
})
export class AdminModule { }
