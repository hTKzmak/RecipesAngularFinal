import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MoreRecipesListComponent } from '../../components/more-recipes-list/more-recipes-list.component';

@Component({
  selector: 'app-base-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MoreRecipesListComponent],
  templateUrl: './base-page.component.html',
  styleUrl: './base-page.component.css'
})
export class BasePageComponent {

}
