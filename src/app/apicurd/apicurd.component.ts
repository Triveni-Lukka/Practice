import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-apicurd',
  templateUrl: './apicurd.component.html',
  styleUrls: ['./apicurd.component.css']
})
export class ApicurdComponent implements OnInit {
Formcurd:FormGroup;
Name:any;
Email:any;
Password:any;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.Formcurd=this.fb.group({
      Name:['',Validators.required],
    Email:['',[Validators.required,Validators.email]],
    Password:['',[Validators.required,Validators.minLength(10)]]

     })
  
}
onSubmit(){
  console.log(this.Formcurd.value)
  this.Name=this.Formcurd.value.Name;
  this.Email=this.Formcurd.value.Email;
  this.Password=this.Formcurd.value.Password;
}

}
