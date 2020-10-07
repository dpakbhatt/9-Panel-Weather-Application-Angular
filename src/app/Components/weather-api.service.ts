import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {
  url = "https://api.openweathermap.org/data/2.5/weather";
  apikey = "ebe9c66b532bd6e389a8b48de39e9e92";

  constructor(private http: HttpClient) { }

  getWeatherData(location): Observable<any>{
    let params = new HttpParams()
    .set('appid', this.apikey)
    .set('q', location)
    return this.http.get<any>(this.url,{params}).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse){
    /*
    return throwError(error);
    */
    return throwError(error.status + " " + error.statusText); 
  }
}