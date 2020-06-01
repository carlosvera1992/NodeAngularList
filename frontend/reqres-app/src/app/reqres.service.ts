import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ReqresService {

  BASE_LOCAL_URL = "http://localhost:3000/v1/reqres/";

  httpHeaders = new HttpHeaders({
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Cache-Control, Key, Access-Control-Allow-Origin",
    "Access-Control-Allow-Origin": "*"
  });

  options = {
    headers: this.httpHeaders
  }; 

  constructor(private httpClient: HttpClient) { }

  public getUsers(){
    return this.httpClient.get(this.BASE_LOCAL_URL+"getUsers", this.options);
  }

  public getUserById(idUser){
    return this.httpClient.get(this.BASE_LOCAL_URL+"getUserById/"+idUser, this.options);
  }

}
