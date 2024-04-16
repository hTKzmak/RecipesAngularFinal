import { Component, inject } from '@angular/core';
import { RecipesService } from '../../../service/recipes.service';
import { RecipeItemComponent } from '../../../components/recipe-item/recipe-item.component';

@Component({
  selector: 'app-dinner-medium',
  standalone: true,
  imports: [RecipeItemComponent],
  templateUrl: './dinner-medium.component.html',
  styleUrl: './dinner-medium.component.css'
})
export class DinnerMediumComponent {
  public recipesService = inject(RecipesService)
}
