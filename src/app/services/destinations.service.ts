import { Injectable } from '@angular/core';

export interface DestinationPlace {
  name: string;
  budget: number;
  startDate: string;
  endDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  constructor() { }

  public getFutureTrips() : DestinationPlace[] {
    return [
      {
        name: 'Paris, France',
        budget: 2000,
        startDate: '2025-06-01',
        endDate: '2025-06-15',
      },
      {
        name: 'Tokyo, Japan',
        budget: 3000,
        startDate: '2025-09-10',
        endDate: '2025-09-25',
      },
      {
        name: 'New York City, USA',
        budget: 2500,
        startDate: '2025-11-05',
        endDate: '2025-11-12',
      },
      {
        name: 'Sydney, Australia',
        budget: 3500,
        startDate: '2026-01-15',
        endDate: '2026-01-30',
      },
    ]
  }
}
