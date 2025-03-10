import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LocationComponent } from './location/location.component';
import { InfoComponent } from './info/info.landing.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'location',
    component: LocationComponent
  }
  {
    path: 'hike',
    component: InfoComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
