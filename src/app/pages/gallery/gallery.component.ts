import { Component } from '@angular/core';
import { Photo, PhotoService } from '../../services/photo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  trips : Map<string, Photo[]> = null;
  currentIndex: number = 0;
  selectedTrip: string = '';
  
  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.trips = this.photoService.getGalleryTrips();
    this.selectedTrip = this.trips.keys().next().value;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.trips.get(this.selectedTrip).length) % this.trips.get(this.selectedTrip).length;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.trips.get(this.selectedTrip).length;
  }

  selectTrip(tripName : string){
    this.selectedTrip = tripName;
    this.currentIndex = 0;
  }

}
