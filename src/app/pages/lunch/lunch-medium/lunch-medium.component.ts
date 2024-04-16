import { Component, inject } from '@angular/core';
import { RecipesService } from '../../../service/recipes.service';
import { RecipeItemComponent } from '../../../components/recipe-item/recipe-item.component';

@Component({
  selector: 'app-lunch-medium',
  standalone: true,
  imports: [RecipeItemComponent],
  templateUrl: './lunch-medium.component.html',
  styleUrl: './lunch-medium.component.css'
})
export class LunchMediumComponent {
  public recipesService = inject(RecipesService)
}
