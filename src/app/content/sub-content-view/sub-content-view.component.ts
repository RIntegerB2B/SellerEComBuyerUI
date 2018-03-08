import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IContentDetail} from '../models/contentDetail.model';
import {ISubContent} from '../models/subContent.model';
import {ContentService} from '../content.service';


@Component({
  selector: 'app-sub-content-view',
  templateUrl: './sub-content-view.component.html',
  styleUrls: ['./sub-content-view.component.css']
})
export class SubContentViewComponent implements OnInit {

  mainContentId : number;
  errorMessage: any;
  subContentList : ISubContent[];
  constructor(private route: ActivatedRoute, private contentService : ContentService) { 
    this.route.params.subscribe( params => {
      this.mainContentId = params.mainContentId;
    });

  }


  ngOnInit() {
    this.getAllSubContent(this.mainContentId);
  }

  getAllSubContent(mainContentId): void {
    var self=this;
    this.contentService.getAllSubContentId(mainContentId).subscribe(contDetail =>
      { 
        self.subContentList = contDetail; 
        self.subContentList.forEach(function(cont:ISubContent){
          self.contentService.getSubContentImage(mainContentId, cont._id).subscribe(imageContent =>
            { 
              for(var i=0;i<self.subContentList.length;i++){
                if(self.subContentList[i]._id==cont._id){
                  self.subContentList[i].subContentDetailImage=imageContent.subContentDetailImage;
                }
              }
            },
            error => {
              console.log(<any>error);
            }
          
          );
        });
        console.log(self.subContentList);
      },
      error => {
        this.errorMessage = <any>error;
        console.log(this.errorMessage);
      }
    
    );
    // console.log(this.patientInfo[0].LastName);
  }

}
