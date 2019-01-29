import { TransportationPage } from './../transportation/transportation.page';
import { HotelsPage } from './../hotels/hotels.page';
import { FlightsPage } from './../flights/flights.page';
import { OffersPage } from './offers.page';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripsPage } from '../trips/trips.page';
import { VisasPage } from '../visas/visas.page';
const routes: Routes = [
   {
     path: '',
     component: OffersPage,
     children: [
      {
        path: 'trips',
        children: [
          {
            path: '',
            loadChildren: '../trips/trips.module#TripsPageModule'
          }
        ]
      },
      {
        path: 'flights',
        children: [
          {
            path: '',
            loadChildren: '../flights/flights.module#FlightsPageModule'
          }
        ]
      },
      {
        path: 'hotels',
        children: [
          {
            path: '',
            loadChildren: '../hotels/hotels.module#HotelsPageModule'
          }
        ]
      },
      {
        path: 'visas',
        children: [
          {
            path: '',
            loadChildren: '../visas/visas.module#VisasPageModule'
          }
        ]
      },
      {
        path: 'transportation',
        children: [
          {
            path: '',
            loadChildren: '../transportation/transportation.module#TransportationPageModule'
          }
        ]
      },

      {
        path: '',
        redirectTo: 'trips',
        pathMatch: 'full'
      }
   ]
  },
  {
    path: '',
    redirectTo: 'offers/trips',
    pathMatch: 'full'
  }
];
@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class OffersRoutingModule { }
