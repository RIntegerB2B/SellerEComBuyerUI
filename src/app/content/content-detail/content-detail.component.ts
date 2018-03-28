import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IContentDetail} from '../models/contentDetail.model';
import {ContentService} from '../content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {

  publishId : number;
  errorMessage: any;
  contentDetail : IContentDetail;
  contentDetailList : IContentDetail[];
  facebookShareUrl:string;
  constructor(private route: ActivatedRoute, private contentService : ContentService, private router: Router ) { 
    this.route.params.subscribe( params => {
      console.log(params);
      this.publishId = params.publishId;
    });

  }


  ngOnInit() {
    this.getAllContents();
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

  getAllContents(): void {
    var self=this;
    this.contentService.getAllContentId().subscribe(contDetail =>
      { 
        self.contentDetailList = contDetail; 
        self.contentDetailList.forEach(function(cont:IContentDetail){
          self.contentService.getMainContentImage(cont._id).subscribe(imageContent =>
            { 
              for(var i=0;i<self.contentDetailList.length;i++){
                if(self.contentDetailList[i]._id==cont._id){
                  self.contentDetailList[i].mainContentImage=imageContent.mainContentImage;
                }
              }
            },
            error => {
              console.log(<any>error);
            }
          
          );
        });
        console.log(self.contentDetail);
      },
      error => {
        this.errorMessage = <any>error;
        console.log(this.errorMessage);
      }
    
    );
    // console.log(this.patientInfo[0].LastName);
  }

  navigateToSubContent(selectedMainContentId){
    this.router.navigate(['/SubContent', selectedMainContentId]);
  }

  shareContent(selectedMainContentId){
    this.facebookShareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + "http://ec2-35-154-51-87.ap-south-1.compute.amazonaws.com/SubContent/5aa10e5eabf4646d0f258c0a";
    window.location.href=this.facebookShareUrl;
  }

}
