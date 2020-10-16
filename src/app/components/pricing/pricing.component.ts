import { Component, OnInit } from '@angular/core';
import {ConfigService } from 'src/app/sservice/config.service'
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  pricing:{
  h2Title: string,
  sectionDescription: String,
  tablePrice: any
  }


  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    this.pricing=this.getPrice();
    
  }
 
  getPrice(){
    return this.config.getConfig().pricing
  }
}
