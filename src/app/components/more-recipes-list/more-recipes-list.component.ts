import { Component, inject } from '@angular/core';
import { MoreRecipesItemComponent } from '../more-recipes-item/more-recipes-item.component';
import { RecipesService } from '../../service/recipes.service';

@Component({
  selector: 'app-more-recipes-list',
  standalone: true,
  imports: [MoreRecipesItemComponent],
  templateUrl: './more-recipes-list.component.html',
  styleUrl: './more-recipes-list.component.css'
})
export class MoreRecipesListComponent {
  public recipesService = inject(RecipesService)
}
