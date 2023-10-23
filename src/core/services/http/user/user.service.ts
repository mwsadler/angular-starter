import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginModel} from "./models/login.model";
import {Observable} from "rxjs";
import {NewUserResponseModel} from "./models/newUserResponse.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url : string = '';
  constructor(private readonly http: HttpClient) {
    this.url = "https://fair-blue-fly-hose.cyclic.cloud";
    // this.url = "http://127.0.0.1:5000";
  }

  validateUserCrendential(loginInfo: LoginModel): Observable<any> {
    return this.http.get<any>(`${this.url}/login`, {params: loginInfo} as {});
  }

  RegisterUser(data:any): Observable<NewUserResponseModel>{
    return this.http.post<NewUserResponseModel>(`${this.url}/register`, data);
  }


}
