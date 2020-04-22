import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AutheticationService, TokenPayload} from '../../service/authentication.service';
import { User } from '../models/user';
import { UserService} from '../../service/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User ={
    email:'',
    password:''
  }
  constructor(private userSer: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onRegister() {
    this.userSer.onSignUp(this.user).subscribe(res => {
      this.router.navigateByUrl('/login');
    });
  }

}
