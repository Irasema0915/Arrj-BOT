import { Component, OnInit } from '@angular/core';
import {Router  } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';
import { User } from '../../app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  user:User ={
    email:'',
    password:''
  }
  constructor( private auth:AuthenticationService ,private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.auth.onLogin(this.user).subscribe(res => {
      this.router.navigate(['home']);
    });
  }
  

}
