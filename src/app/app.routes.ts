import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

export const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "about", component: AboutComponent},
    {path: "destinations", component: DestinationsComponent},
    {path: "gallery", component: GalleryComponent}
];
