import { Injectable } from '@angular/core';
import { Ws } from '@adonisjs/websocket-client';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  private ws = Ws('ws://54.193.210.128');

  public connect()
  {
     this.ws.connect();
  }
}
