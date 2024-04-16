import { Component, inject } from '@angular/core';
import { RecipesService } from '../../../service/recipes.service';
import { RecipeItemComponent } from '../../../components/recipe-item/recipe-item.component';

@Component({
  selector: 'app-lunch-all',
  standalone: true,
  imports: [RecipeItemComponent],
  templateUrl: './lunch-all.component.html',
  styleUrl: './lunch-all.component.css'
})
export class LunchAllComponent {
  public recipesService = inject(RecipesService)
}
