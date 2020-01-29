import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  newReleases: any[] = [];
  loader: boolean;
  error: boolean;
  messageError: string;

  constructor(private spotifyService: SpotifyService,
              private authService: AuthService,
              private router: Router) {

    this.loader = true;
    this.loader = false;
    this.messageError = '';

    this.spotifyService.getNewReleases().subscribe(data => {

      this.newReleases = data;
      this.loader = false;

    }, responseError => {

      this.loader = false;
      this.error = true;
      this.messageError = responseError.error.error.message;

    });
  }

  exit() {

    this.authService.logout();
    this.router.navigateByUrl('/login');

  }

}
