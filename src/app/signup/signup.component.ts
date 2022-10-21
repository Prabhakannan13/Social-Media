import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  name=""
  dob=""
  phnno=""
  place=""
  email=""
  password=""
  confirmpassword=""

  readValues=()=>{
    let data={
      "name":this.name,
      "dob":this.dob,
      "phnno":this.phnno,
      "place":this.place,
      "email":this.email,
      "password":this.password,
      "confirmpassword":this.confirmpassword
    }
    console.log(data)
    this.myapi.addUser(data).subscribe(
      (res)=>{
        alert("Successfully Added")
      }
    )
  }

  ngOnInit(): void {
  }

}
