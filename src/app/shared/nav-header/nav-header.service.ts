import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Category} from './category.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {AppSetting}  from '../../config/appSetting';

@Injectable()
export class NavHeaderService {

  visible: boolean;
  serviceUrl: string = AppSetting.serviceUrl;
  constructor(private http: Http) { this.visible = true; }

  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }

  getCategories(): Observable<any> {
    return this.http.get(this.serviceUrl +  "category")
        .map((response : Response) => <Category[]>response.json())
        .do((x) => console.log(x)).catch((e) => this.handleError(e));
  }

  handleError(arg0: any): any {
    console.log(arg0);
  }

}
