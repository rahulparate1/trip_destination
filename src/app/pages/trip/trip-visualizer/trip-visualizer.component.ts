import { Component } from '@angular/core';

interface Trip {
  start: string;
  end: string;
  level: number;
  continued: boolean;
}

@Component({
  selector: 'app-trip-visualizer',
  templateUrl: './trip-visualizer.component.html',
  styleUrls: ['./trip-visualizer.component.scss']
})
export class TripVisualizerComponent {
  trips: Trip[] = [];
  start = '';
  end = '';

  addTrip() {
    if (!this.start || !this.end) return;

    const upperStart = this.start.toUpperCase();
    const upperEnd = this.end.toUpperCase();

    const lastTrip = this.trips[this.trips.length - 1];
    const isContinued = lastTrip?.end === upperStart;

    const isDuplicate = this.trips.some(
      trip => trip.start === upperStart && trip.end === upperEnd
    );

    const level = isDuplicate ? 2 : 1;

    this.trips.push({
      start: upperStart,
      end: upperEnd,
      level,
      continued: isContinued
    });

    this.start = '';
    this.end = '';
  }

  getColor(trip: Trip): string {
    if (trip.level === 2) return '#999';
    if (trip.start === 'BLR') return '#f5a623';
    if (trip.start === 'MAA') return '#007bff';
    if (trip.start === 'DEL') return '#5856d6';
    return '#888';
  }
}
