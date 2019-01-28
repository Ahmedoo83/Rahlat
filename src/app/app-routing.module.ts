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
  { path: 'trips', loadChildren: './trips/trips.module#TripsPageModule' },
  { path: 'flights', loadChildren: './flights/flights.module#FlightsPageModule' },
  { path: 'transportation', loadChildren: './transportation/transportation.module#TransportationPageModule' },
  { path: 'visas', loadChildren: './visas/visas.module#VisasPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
