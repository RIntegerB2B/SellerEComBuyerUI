import { Component, OnInit } from '@angular/core';
import {NavHeaderService} from './nav-header.service';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {
  searchVisible: boolean = false;
  constructor(public nav : NavHeaderService) { }

  ngOnInit() {
    this.nav.show();
  }

  showSearch() :void{
    this.searchVisible = true;
  }
  hideSearch() :void{
    this.searchVisible = false;
  }
  

}
