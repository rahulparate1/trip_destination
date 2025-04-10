import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TripVisualizerComponent } from './trip-visualizer/trip-visualizer.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'trip-list',
    component: TripVisualizerComponent,
  },
];

export const tripRouting = RouterModule.forChild(routes);

@NgModule({
  declarations: [
    TripVisualizerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    tripRouting
  ]
})
export class TripModule { }
