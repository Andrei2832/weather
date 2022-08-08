import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../../services/weather.service";
import {WeatherData} from "../../models/weather/weather.module";

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {

  public weatherData: WeatherData = {}

  constructor(
    private weatherService: WeatherService,
  ) { }

  ngOnInit(): void {
    console.log(this.weatherData)
  }

}
