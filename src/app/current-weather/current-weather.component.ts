import { Component } from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent {
  current: ICurrentWeather
  constructor(private weatherService: WeatherService) {
    this.current = {
      city: '',
      country: '',
      date: new Date(),
      image: '',
      temperature: 0,
      description: ''
    }
    this.weatherService.getCurrentWeather('Taipei', 'TW').subscribe(data => this.current = data)
  }
}
