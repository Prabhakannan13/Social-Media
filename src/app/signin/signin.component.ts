import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private myRouter:Router, private myapi:ApiService) { }

  email=""
  password=""

  readValues=()=>{
    let data={
      "email":this.email,
      "password":this.password
    }
    console.log(data)
    this.myapi.login(data).subscribe(
      (res:any)=>{
        if (res.length>0){
          localStorage.setItem("stored_name",res[0].name)
          localStorage.setItem("stored_id",res[0].id)
          this.myRouter.navigate(["/tweet"])
        }else
        {
          alert("Invalid Credentials")
        }
      }
    )
  }

  ngOnInit(): void {
  }

}
