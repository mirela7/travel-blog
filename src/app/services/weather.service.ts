import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface HourlyWeatherData {
  time: string[],
  temperature_2m: number[],
}

export interface WeatherData {
  latitude: number,
  longitude: number,
  hourly: HourlyWeatherData
}

@Injectable({
  providedIn: 'root',
  
})
export class WeatherService {
  private apiUrl = 'https://api.open-meteo.com/v1/forecast';

  constructor(private http: HttpClient) {}

  getWeather(latitude: number, longitude: number): Observable<WeatherData> {
    const url = `${this.apiUrl}?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&forecast_days=1`;
    return this.http.get<WeatherData>(url);
  }
}
