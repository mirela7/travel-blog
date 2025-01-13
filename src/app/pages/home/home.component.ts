import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { PhotoService, Photo } from '../../services/photo.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [MatTabsModule, CommonModule, RouterModule],
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  photos : Photo[] = [];

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photos = this.photoService.getPhotos();
  }
  
}
