import { Component, OnInit } from '@angular/core';
import { DestinationPlace, DestinationsService } from '../../services/destinations.service';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule, DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { WeatherData, WeatherService } from '../../services/weather.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-destinations',
  imports: [MatTableModule, MatToolbarModule, CommonModule, HttpClientModule],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.scss'
})
export class DestinationsComponent implements OnInit{
  destinations : DestinationPlace[] = []
  weatherData : WeatherData = null
  todayTemperature: number = 0.0

  displayedColumns = [
    { key: 'name', header: 'Destination' },
    { key: 'budget', header: 'Budget ($)' },
    { key: 'startDate', header: 'Start Date' },
    { key: 'endDate', header: 'End Date' },
  ];
  
  constructor(private destinationsService: DestinationsService,
    private weatherService: WeatherService
  ) {

  }
  ngOnInit(): void {
    this.destinations = this.destinationsService.getFutureTrips();
    this.weatherService.getWeather(48.864716, 2.349014).subscribe({
      next: (data) => {
        this.weatherData = data;
        console.log('Weather Data:', this.weatherData);
        this.todayTemperature = data.hourly.temperature_2m[20];
      },
      error: (error) => {
        console.error('Error fetching weather data:', error);
      }
    });
  }

  get displayedColumnKeys() {
    return  this.displayedColumns.map(col => col.key);
  }

}
