import { Component, OnInit } from '@angular/core';
import { AutheticationService} from '../../service/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth:AutheticationService){}

  ngOnInit(): void {
  }

}
