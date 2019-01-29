import { OffersRoutingModule } from './offers-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OffersPage } from './offers.page';
import { TripsPageModule } from '../trips/trips.module';
import { FlightsPageModule } from '../flights/flights.module';
import { TransportationPageModule } from '../transportation/transportation.module';
import { VisasPageModule } from '../visas/visas.module';

// const routes: Routes = [
//   {
//     path: '',
//     component: OffersPage
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffersRoutingModule,
    // RouterModule.forChild(routes),
    // TripsPageModule, FlightsPageModule, TransportationPageModule, VisasPageModule,
  ],
  declarations: [OffersPage]
})
export class OffersPageModule {}
