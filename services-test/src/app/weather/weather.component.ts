import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.sass']
})
export class WeatherComponent implements OnInit {

  city!: string;

  weather!: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  searchWeather(): void {
    this.weatherService.getWeather(this.city).subscribe(toto => {
      this.weather = {
        description: toto.weather,
        main: toto.main
      }
    });
  }

}
