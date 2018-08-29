import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showContactGroup:boolean = false;
  contactGroups = [];
  constructor( private SharedService: SharedService){

  }
  ngOnInit(){
    this.SharedService.sendMessage(false);
  }
  createGroup(){
    this.showContactGroup = true;
  }
}
