import { Component, OnInit } from '@angular/core';
import { AutheticationService, UserDetails} from '../../service/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  details: UserDetails

  constructor(private auth:AutheticationService) { }

  ngOnInit(): void {
    const current   = this.auth.getUserDetails()
    this.auth.profile(current.uid).subscribe(
      user => {
        this.details = user
      },
      err => {
        console.error(err)
      }
    )
  }

}
