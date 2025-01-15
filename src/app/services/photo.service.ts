import { Injectable } from '@angular/core';

export interface Photo {
  url: string;
  alt: string;
  caption: string;
}


@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  
  private photos: Photo[] =  [
    {
      url: 'https://cdn.britannica.com/31/255531-050-B7E07090/eiffel-tower-paris-france-champ-de-mars-view.jpg',
      alt: 'Eiffel Tower, Paris',
      caption: 'Eiffel Tower - Paris, France',
    },
    {
      url: 'https://cdn.britannica.com/89/179589-138-3EE27C94/Overview-Great-Wall-of-China.jpg?w=800&h=450&c=crop',
      alt: 'Great Wall of China',
      caption: 'Great Wall of China - China',
    },
    {
      url: 'https://media.cntraveller.com/photos/63eb5a36b515236831979f64/3:2/w_6015,h_4010,c_limit/GettyImages-1145042281.jpeg',
      alt: 'Bali Beach',
      caption: 'Bali Beach - Indonesia',
    },
  ];

  constructor() {}

  // Method to get the list of photos
  getPhotos(): Photo[] {
    return this.photos;
  }

  getGalleryTrips(): Map<string, Photo[]> {
    return new Map<string, Photo[]>([
      ["Seattle, 2024", this.getSeattleImages()],
      ["Italy, 2024", this.getItalyImages()],
      ["London, 2024", this.getLondonImages()]
    ]);
  }

  getSeattleImages() {
    return [{
      url: './assets/images/seattle1.jpg',
      alt: '',
      caption: ''
    },
    {
      url: './assets/images/seattle2.jpg',
      alt: '',
      caption: ''
    },
    {
      url: './assets/images/seattle3.jpg',
      alt: '',
      caption: ''
    },
    {
      url: 'assets/images/seattle4.jpg',
      alt: '',
      caption: ''
    },
    {
      url: 'assets/images/seattle5.jpg',
      alt: '',
      caption: ''
    }];
  }

  getItalyImages() {
    return [{
      url: './assets/images/italy1.jpg',
      alt: '',
      caption: ''
    },
    {
      url: './assets/images/italy2.jpg',
      alt: '',
      caption: ''
    },
    {
      url: './assets/images/italy3.jpg',
      alt: '',
      caption: ''
    }];
  }

  getLondonImages() {
    return [{
      url: './assets/images/london1.jpg',
      alt: '',
      caption: ''
    },
    {
      url: './assets/images/london2.jpg',
      alt: '',
      caption: ''
    },
    {
      url: './assets/images/london3.jpg',
      alt: '',
      caption: ''
    }];
  }
}
