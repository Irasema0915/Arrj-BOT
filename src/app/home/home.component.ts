import { Component, OnInit } from '@angular/core';
import { Homemodel } from '../models/home.model';
import { HomeService } from '../../service/home.service';
import Ws  from '@adonisjs/websocket-client';
import { AuthenticationService}from '../../service/authentication.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  ws: any;
  feed: any;
  message: string[] = [];
  firebase: string[] = [];
  text: string;

  constructor(private authService: AuthenticationService, private router: Router) { }
  onLogout(): void {
    this.authService.removeToken();
    this.router.navigate(['/login']);
  }
  
   ngOnInit(): void {
     this.ws = Ws('ws://54.193.210.128', {
       path: 'ArjRobot'
     });
     this.firebase.push('Datos enviados por firebase');
     this.ws.connect();
     this.feed = this.ws.subscribe("feed");

    //  emit enviar datos al websocket
    // on escuchar al websocket

     this.feed.on('test', (data: any) => {
      this.message.push('Conectado al server');
     })
  }

  adelante(param: string){
    this.feed.emit('carro', param);
    this.feed.on('movimientosc', ( data: any) => {
      this.message.push(data);
    });
    
  }
  atras(param: string){
    this.feed.emit('carro', param);
    this.feed.on('movimientosc', ( data: any) => {
      this.message.push(data);
    });
    
  }
  izquierda(param: string){
    this.feed.emit('carro', param);
    this.feed.on('movimientosc', ( data: any) => {
      this.message.push(data);
    });
    
  }
  derecha(param: string){
    this.feed.emit('carro', param);
    this.feed.on('movimientosc', ( data: any) => {
      this.message.push(data);
    });
    
  }
  centro(param: string){
    this.feed.emit('brazo', param);
    this.feed.on('movimientosb', ( data: any) => {
      this.message.push(data);
    });
    
  }
  soltar(param: string){
    this.feed.emit('pinza', param);
    this.feed.on('movimientosp', ( data: any) => {
      this.message.push(data);
    });
    
  }
  agarrar(param: string){
    this.feed.emit('pinza', param);
    this.feed.on('movimientosp', ( data: any) => {
      this.message.push(data);
    });
    
  }
  derechab(param: string){
    this.feed.emit('brazo', param);
    this.feed.on('movimientosb', ( data: any) => {
      this.message.push(data);
    });
    
  }
  izquierdab(param: string){
    this.feed.emit('brazo', param);
    this.feed.on('movimientosb', ( data: any) => {
      this.message.push(data);
    });
    
  }
  abajo(param: string){
    this.feed.emit('brazo', param);
    this.feed.on('movimientosb', ( data: any) => {
      this.message.push(data);
    });
    
  }
  Suscribirte(param: string)
  {
    this.feed.emit('test', param);
    this.feed.on('subscripcion', ( data: any) => {
      this.message.push(data);
    });
    
  }
  Firebase()
  {
    this.feed.emit('firebase', this.text);
    this.firebase.push(this.text);
    
  }
  Camara(param:string){
 
    this.feed.emit('foto', param);
    this.feed.on('capturarf', ( data: any) => {
      this.message.push(data);
    });
    window.location.reload();
  }

}
