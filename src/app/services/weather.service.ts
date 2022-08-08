import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {WeatherData} from "../models/weather/weather.module";
import {BehaviorSubject, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(
    private http: HttpClient,
  ) {}

  // getWeather(cityName: string): any {
  //   this.getWeatherData(cityName)
  //     .subscribe({
  //       next: (response) => {
  //         return response;
  //       }
  //     });
  // }

  getWeatherData(cityName: string): Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl,{
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
        .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
        .set('location', cityName)
        .set('format', 'json')
        .set('u', 'f')
    })
  }
}
