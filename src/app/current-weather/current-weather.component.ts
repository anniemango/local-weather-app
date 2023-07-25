import { Component, Input } from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent {
  @Input() current: ICurrentWeather
  constructor() {
    this.current = {
      city: '',
      country: '',
      date: new Date(),
      image: '',
      temperature: 0,
      description: ''
    }
  }
}
