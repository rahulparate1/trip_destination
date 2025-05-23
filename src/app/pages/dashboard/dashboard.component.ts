import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(public router: Router) {}

  // Navigate to the trip page
  navigateToTrip() {
    this.router.navigate(['/trip/trip-list']);
  }

}
