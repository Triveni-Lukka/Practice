import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-formapi',
  templateUrl: './formapi.component.html',
  styleUrls: ['./formapi.component.css']
})
export class FormapiComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
//Formcurd:FormGroup;
Name:any;
Email:any;
Password:any;
Formcurd= new FormGroup({
  Name:new FormControl('',Validators.required),
  Email:new FormControl('',[Validators.required,Validators.email]),
  Password: new FormControl('',[Validators.required,Validators.minLength(10)]),
  
    
  })

  ngOnInit() {
  }
  onSubmit(){
    console.log(JSON.stringify(this.Formcurd.value))
    this.Name=this.Formcurd.value.Name;
    this.Email=this.Formcurd.value.Email;
    this.Password=this.Formcurd.value.Password}


}
