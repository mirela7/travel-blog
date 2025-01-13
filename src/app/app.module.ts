import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes'; 
import { HomeComponent } from './pages/home/home.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar'; // Import MatToolbarModule
import { MatButton, MatButtonModule } from '@angular/material/button'; // Import MatButtonModule
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent, // Root component
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    DestinationsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes), // Add routes here
    MatTabsModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent], // Bootstraps the root component
})
export class AppModule {}
