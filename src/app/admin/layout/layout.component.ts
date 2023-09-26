import { Component, OnInit } from '@angular/core';             //oluşturmak için ng(angular) g(generate) c(component) admin/layout  yazdık.
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private alertify: AlertifyService) { }

  ngOnInit(): void {
    //this.alertify.message("Merhaba",{
    //  messageType:MessageType.Error,
    //  position:Position.TopRight,
    //  delay:3,
    //  dismissOthers:false    
    //} );

  }

}

