import { Component, inject } from '@angular/core';
import { RecipeItemComponent } from '../../../components/recipe-item/recipe-item.component';
import { RecipesService } from '../../../service/recipes.service';

@Component({
  selector: 'app-breakfast-medium',
  standalone: true,
  imports: [RecipeItemComponent],
  templateUrl: './breakfast-medium.component.html',
  styleUrl: './breakfast-medium.component.css'
})
export class BreakfastMediumComponent {
  public recipesService = inject(RecipesService)
}
