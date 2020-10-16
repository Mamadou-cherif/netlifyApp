import { Component, OnInit } from '@angular/core';
import {ConfigService } from 'src/app/sservice/config.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

header= {
  h1Part1: "",
  h1Part2: "",
  paragraphe: ""
}

  constructor(private config: ConfigService) { }

  ngOnInit(): void {
   this.header= this.getHeader()
  }
  

  getHeader(){
    return this.config.getConfig().header;
  }


}
