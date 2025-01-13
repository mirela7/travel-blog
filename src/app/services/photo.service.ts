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
      url: 'https://imageio.forbes.com/specials-images/imageserve/6518920b4cb81fadd99954e8/Landscape-with-Halong-bay/960x0.jpg?format=jpg&width=960',
      alt: 'Eiffel Tower, Paris',
      caption: 'Eiffel Tower - Paris, France',
    },
    {
      url: 'https://via.placeholder.com/800x400?text=Great+Wall+of+China',
      alt: 'Great Wall of China',
      caption: 'Great Wall of China - China',
    },
    {
      url: 'https://via.placeholder.com/800x400?text=Bali+Beach',
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
