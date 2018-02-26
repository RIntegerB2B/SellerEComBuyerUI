import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Registration} from './buyer-registration/buyer-registration.model';
import {SignIn} from './buyer-signin/buyer-signin.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {AppSetting}  from '../config/appSetting';


@Injectable()
export class AccountService {
  serviceUrl: string = AppSetting.awsServiceUrl;
  handleError(arg0: any): any {
    console.log(arg0);
  }
  constructor(private http: Http) { }

  ngOnInit() {
  }


  registerBuyer(buyer: Registration): Observable<any> {
    let headers = new Headers({
      'Content-Type':
      'application/json; charset=utf-8'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.serviceUrl + "buyer" , buyer, options)
        .map((response : Response) => <any>response.json())
        .do((x) => console.log(x)).catch((e) => this.handleError(e));
  }

  signIn(user: SignIn): Observable<any> {
    let headers = new Headers({
      'Content-Type':
      'application/json; charset=utf-8'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.serviceUrl + "user" , user, options)
        .map((response : Response) => <any>response.json())
        .do((x) => console.log(x)).catch((e) => this.handleError(e));
  }


}
