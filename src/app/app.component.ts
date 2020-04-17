import { Component } from '@angular/core';
import { AutheticationService } from '../service/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ARRJ-BOT-FRONT';

  constructor (public auth: AutheticationService){}
}
