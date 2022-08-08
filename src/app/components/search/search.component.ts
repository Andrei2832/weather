import { Component, OnInit } from '@angular/core';
import {WeatherData} from "../../models/weather/weather.module";
import {WeatherService} from "../../services/weather.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    private weatherService:WeatherService,
  ) { }

  cityName: string = 'Wellington';


  ngOnInit(): void {
    // this.weatherService.getWeather(this.cityName);
    this.cityName = '';
  }

  onSubmit() {
    // this.weatherService.getWeather(this.cityName);
    this.cityName = '';
  }

}
