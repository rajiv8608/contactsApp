import { Component, OnInit} from '@angular/core';
import { SharedService } from './shared.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sampleApp';
  showTabs:any = true;
  constructor( private SharedService: SharedService){

  }
  ngOnInit(){
   
  }
  ngAfterViewInit() {
    this.SharedService.testMessage.subscribe(data => {
      this.showTabs = data;
    })
  }
  logOut(){
    this.showTabs = true;
  }
}
