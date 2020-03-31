import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";
import {User} from "../model/user.model";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  
  getUsers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>("http://dummy.restapiexample.com/api/v1/employees");
  }

  createUser(usermodel: User): Observable<ApiResponse> {
    console.log(usermodel)
 let user = {
   name:usermodel.firstName,
   salary:usermodel.salary,
   age:usermodel.age
 }
    return this.http.post<ApiResponse>("http://dummy.restapiexample.com/api/v1/create", user);
  }

}
