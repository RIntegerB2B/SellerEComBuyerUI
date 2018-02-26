import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IContentDetail} from '../models/contentDetail.model';
import {ContentService} from '../content.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {

  publishId : number;
  errorMessage: any;
  contentDetail : IContentDetail;
  constructor(private route: ActivatedRoute, private contentService : ContentService) { 
    this.route.params.subscribe( params => {
      console.log(params);
      this.publishId = params.publishId;
    });

  }


  ngOnInit() {
    this.getContentDetail();
  }

  getContentDetail(): void {
    this.contentService.getContentDetail(this.publishId).subscribe(contDetail =>
      { 
        this.contentDetail = contDetail; 
        console.log(this.contentDetail);
      },
      error => {
        this.errorMessage = <any>error;
        console.log(this.errorMessage);
      }
    
    );
    // console.log(this.patientInfo[0].LastName);
  }


}
