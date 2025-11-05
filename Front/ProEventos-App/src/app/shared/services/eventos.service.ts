import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventosService {
  constructor(private http: HttpClient) {}

  getEventos(): Observable<any> {
    return this.http
      .get('https://localhost:5001/api/evento').pipe(
        map((response: any) => {
          response
        }),
        catchError(( error: any) => {
          console.error(error);
          return of(null);
        })
      )

  }
}
