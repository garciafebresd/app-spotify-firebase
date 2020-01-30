import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'home'    , component: HomeComponent, canActivate: [ AuthGuard ] },
  { path: 'search', component: SearchComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: '**', redirectTo: 'login' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
