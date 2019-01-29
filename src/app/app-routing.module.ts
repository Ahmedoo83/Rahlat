import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'offers', loadChildren: './offers/offers.module#OffersPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'contactus', loadChildren: './contactus/contactus.module#ContactusPageModule' },
  { path: 'favourites', loadChildren: './favourites/favourites.module#FavouritesPageModule' },
  // { path: 'trips', loadChildren: './trips/trips.module#TripsPageModule' },
  // { path: 'flights', loadChildren: './flights/flights.module#FlightsPageModule' },
  // { path: 'transportation', loadChildren: './transportation/transportation.module#TransportationPageModule' },
  // { path: 'visas', loadChildren: './visas/visas.module#VisasPageModule' },
  // { path: 'hotels', loadChildren: './hotels/hotels.module#HotelsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
