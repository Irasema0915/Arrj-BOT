import { Component, OnInit } from '@angular/core';
import {Router  } from '@angular/router';
import { AutheticationService, TokenPayload} from '../../service/authentication.service';
import { User } from '../../app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credential : TokenPayload= {
    id:0,
    name: '',
    email:'',
    password:''

  }

  constructor(private auth: AutheticationService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.auth.login(this.credential).subscribe(res => {
      this.router.navigateByUrl('/home');
    });
  }
  

}
