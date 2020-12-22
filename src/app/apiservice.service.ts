import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Comments} from './model/comments';
import { Posts } from './model/posts';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }
api='https://jsonplaceholder.typicode.com/posts/1/comments'
postapi='https://jsonplaceholder.typicode.com/posts';
getusers():Observable<any>{
  return this.http.get(this.api);
}
userData(opost:Posts):Observable<any>{
  return this.http.post(this.postapi,opost);
}

}
