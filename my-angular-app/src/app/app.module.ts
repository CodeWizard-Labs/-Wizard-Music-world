import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component'; // Importeer de HomeComponent
import { MusicComponent } from './music.component'; // Importeer de MusicComponent
import { PlaylistComponent } from './playlist.component'; // Importeer de PlaylistComponent

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MusicComponent,
    PlaylistComponent // Voeg de PlaylistComponent toe aan de declarations array
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent }, // Maak een route voor Home
      { path: 'music', component: MusicComponent }, // Maak een route voor Music
      { path: 'playlist', component: PlaylistComponent } // Maak een route voor Playlist
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
