import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,CommonModule ,FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register implements OnInit {
  regForm :FormGroup

  constructor(){
    this.regForm=new FormGroup({
      name:new FormControl("",[Validators.required,Validators.pattern('^[a-z-A-Z]{3,15}$')]),
      email: new FormControl(""),
      password :new FormControl(""),
      address:new FormGroup({
        city: new FormControl(""),
        street: new FormControl("")
      }),
      phoneNums:new FormArray([new FormControl('')])
    })
  }
  ngOnInit(): void {
   this.regForm.patchValue({
    name:"bero"

   });
  }
  register(){
    alert("تم التسجيل بنجاح")
  }
 get name(){
    return this.regForm.get('name')?this.regForm.get('name'):''
  }
  get phones(){
    return this.regForm.get('phoneNums') as FormArray
  }
  addPhone(){
    this.phones.push(new FormControl(''))
  }

}
