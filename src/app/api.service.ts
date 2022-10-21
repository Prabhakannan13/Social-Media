import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addUser=(data:any)=>{
    return this.http.post("http://localhost:8080/adduser",data)
  }

  login=(data:any)=>{
    return this.http.post("http://localhost:8080/login",data)
  }
}
