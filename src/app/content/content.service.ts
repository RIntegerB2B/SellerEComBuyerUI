import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {IContentList} from './models/content.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {AppSetting}  from '../config/appSetting';


@Injectable()
export class ContentService {
  serviceUrl: string = AppSetting.awsServiceUrl;
  handleError(arg0: any): any {
    console.log(arg0);
  }
  constructor(private http: Http) { }

  ngOnInit() {
  }


  getContents(): Observable<any> {
    return this.http.get(this.serviceUrl +  "contents")
        .map((response : Response) => <IContentList[]>response.json())
        .do((x) => console.log(x)).catch((e) => this.handleError(e));
  }


  getContentDetail(publishId : Number) :Observable<any>{

    return this.http.get(this.serviceUrl + "contents/contentDetail/" + publishId)
      .map((response : Response) => <any>response.json())
      .do((x) => console.log(x)).catch((e) => this.handleError(e));
  }

  
}
