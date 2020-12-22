import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {DataService} from '../data.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  Loginform= new FormGroup({
    email: new FormControl('' ,Validators.required),
    fname: new FormControl('' ,Validators.required),
    lname: new FormControl('' ,Validators.required)
   
  });
  products={};
  //email:any;
 // password:any;
  /*products=[];
  onSubmit(){  
    console.log(this.Loginform.value);
    this.products.push(this.Loginform.value);
  }*/

  constructor(private dataservice:DataService) { }

  ngOnInit() {
this.dataservice.getUsers().subscribe(response=>{

  this.products=response
});

  }

}
