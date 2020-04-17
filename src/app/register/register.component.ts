import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutheticationService, TokenPayload} from '../../service/authentication.service';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  credential : TokenPayload= {
    id:0,
    name: '',
    email:'',
    password:''

  }
  constructor(private auth: AutheticationService, private router: Router) { }

  ngOnInit(): void {
  }

  onRegister() {
    this.auth.register(this.credential).subscribe(res => {
      this.router.navigateByUrl('/login');
    });
  }

}
