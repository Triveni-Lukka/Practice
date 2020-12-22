import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import {Comments} from '../model/comments';
import {Posts} from '../model/posts';

@Component({
  selector: 'app-apicalls',
  templateUrl: './apicalls.component.html',
  styleUrls: ['./apicalls.component.css']
})
export class ApicallsComponent implements OnInit {

  constructor(private restapi:ApiserviceService) { }
list:Comments[];
postlist:Posts;
  ngOnInit() {
    this.restapi.getusers().subscribe(data=>{
console.log(data);
this.list=data;

 })

 let opost= new Posts();
 opost.userId=479;
 opost.id=77;
 opost.title='test';
 opost.body='amet autem assumenda provident rerum culpa'

 this.restapi.userData(opost).subscribe(data=>{
   console.log(data);
   this.postlist=data;


})
  }
   
}
