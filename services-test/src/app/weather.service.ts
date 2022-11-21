import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiUrl: string = 'https://api.openweathermap.org/data/2.5';
  apiKey: string = 'd1f1192c61bff34c70979e832a2dbab3';

  constructor(private http: HttpClient) { }

  getWeather(cityName: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/weather?appid=${this.apiKey}&q=${cityName}`, {});
  }

  // getWeather('Lyon')
  // https://api.openweathermap.org/data/2.5/weather?appid=d1f1192c61bff34c70979e832a2dbab3&q=Lyon

}
