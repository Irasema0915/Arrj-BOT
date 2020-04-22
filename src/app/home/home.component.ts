import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
    /*const current   = this.auth.getUserDetails()
    this.auth.profile(current.uid).subscribe(
      user => {
        this.details = user
      },
      err => {
        console.error(err)
      }
    )*/
  }

}
