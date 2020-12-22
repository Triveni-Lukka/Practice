import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

fname:any;
lname:any;
Email:any;
Password:any;
formprofile= new FormGroup({
  Firstname:new FormControl(''),
Lastname:new FormControl(''),
Email:new FormControl (''),
Password:new FormControl('')
});
datalist= [];
onSubmit(){
 // console.log(this.formprofile.value);
 // this.datalist=JSON.stringify(this.formprofile.value)
 //this.datalist.push(this.formprofile.value);
 this.fname=this.formprofile.value.Firstname;
 this.lname=this.formprofile.value.Lastname;
 this.Email=this.formprofile.value.Email;
 this.Password=this.formprofile.value.Password;


}


  constructor() { }

  ngOnInit() {
  }

}
