import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolizaTriatlonService {
  constructor(private http: HttpClient) { }

  public getQuote(eventId: String, bikeId: String, wetsuitId:String, helmetId:String): Observable<any> {
    let redirection = '/api2/quote?eventId=' + eventId;
    if (bikeId) redirection = redirection.concat('&bikeId=' + bikeId);
    if (wetsuitId) redirection = redirection.concat('&wetsuitId=' + wetsuitId);
    if (helmetId) redirection = redirection.concat('&helmetId=' + helmetId);
    return this.http.get(redirection);
  }

  public getCombo1(): Observable<any> {
    return this.http.get('/api/event');
  }

  public getCombo2(): Observable<any> {
    return this.http.get('/api/bike');
  }

  public getCombo3(): Observable<any> {
    return this.http.get('/api/wetsuit');
  }

  public getCombo4(): Observable<any> {
    return this.http.get('/api/helmet');
  }
}
