import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {ContentService} from '../content.service';
import {IContentList} from '../models/content.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.css']
})
export class ContentViewComponent implements OnInit {
  contents: IContentList[];
  errorMessage: string;
  constructor(private contentService : ContentService, private router: Router) { }

  ngOnInit() {
    this.getContents();
  }

  getContents(): void {
    this.contentService.getContents().subscribe(contDetail =>
      { 
        this.contents = contDetail; 
        console.log(this.contents);
      },
      error => {
        this.errorMessage = <any>error;
        console.log(this.errorMessage);
      }
    
    );
    // console.log(this.patientInfo[0].LastName);
  }

  getContentDetail(publishId : Number): void {
    this.router.navigate(['/ContentDetail',publishId]);

  }

}
