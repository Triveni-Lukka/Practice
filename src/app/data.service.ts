import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  api_rest="https://jsonplaceholder.typicode.com/comments";
 public getUsers():Observable<any>{
   return this.http.get(this.api_rest);
  }
}
