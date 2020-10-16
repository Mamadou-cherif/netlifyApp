import { Component, OnInit } from '@angular/core';
import {ConfigService } from 'src/app/sservice/config.service'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

a:"abata"

  services:{
    h2Title: String,
    GlobalDescription: String,
    iconLinks:String,
    iconTitle:String,
    iconDescription: String,
    tableServices: any
   }
  




  


  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    this.services= this.getServices()
  }


  getServices(){
    return this.config.getConfig().services;
  }

}
