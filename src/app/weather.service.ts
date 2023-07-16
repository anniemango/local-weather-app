import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'
import { ICurrentWeatherData } from './icurrent-weather-data';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) {}

    getCurrentWeather (city:String, country: string){
      this.httpClient.get<ICurrentWeatherData>(//putInURL form one big string use `` ${city},${country} ${environment.appId})
      .pipe(map(data => this.transformToICurrentWeather(data)))
      
    }

    private transformToICurrentWeather(data: ICurrentWeatherData) : ICurrentWeather{//not necessary to define data type
      return {
        city: data.name,
        country: data.sys.country,
        date: new Date(data.dt *1000), // should be in milliseconds)
        temperature: data.main.temp * 9/5 - 459.67,
        description: data.weather[0].description,
        image:`https://openweathermap.org/img/w/${data.weather[0].icon}.png`
      }
    }
  
}
