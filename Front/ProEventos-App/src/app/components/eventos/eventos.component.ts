import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/shared/services/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any;
/*
  constructor(private eventsService: EventosService) { }

  ngOnInit(): void {
   this.eventos = this.eventsService.getEventos();
  } */

   constructor(private http: HttpClient) {}

   ngOnInit(): void {
    this.eventos = this.getEventos();
    console.log(this.eventos);
   }

   public getEventos(): void {
     this.http
       .get('https://localhost:5001/api/Evento')
       .subscribe((eventos) => {
        this.eventos = eventos;
        console.log(this.eventos);
       });
   }

}
