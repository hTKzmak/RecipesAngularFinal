import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.css'
})
export class NotFoundPageComponent {
  constructor(private location: Location) {}

  goBackToPrevPage(): void {
    this.location.back();
  }
}
