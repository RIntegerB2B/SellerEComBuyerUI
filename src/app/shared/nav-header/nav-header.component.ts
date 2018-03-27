import { Component, OnInit } from '@angular/core';
import {NavHeaderService} from './nav-header.service';
import{Category} from './category.model';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {
  searchVisible: boolean = false;
  categories:Category[];
  constructor(public nav : NavHeaderService, ) { }

  ngOnInit() {
    this.nav.show();
    this.getCategories();
  }

  showSearch() :void{
    this.searchVisible = true;
  }
  hideSearch() :void{
    this.searchVisible = false;
  }
  
  getCategories(): void {
    this.nav.getCategories().subscribe(cats =>
      { 
        this.categories = cats; 
        console.log(this.categories);
      },
      error => {
        console.log(error);
      }
    );
  }

}
