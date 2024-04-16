import { Component, inject } from '@angular/core';
import { RecipesService } from '../../../service/recipes.service';
import { RecipeItemComponent } from '../../../components/recipe-item/recipe-item.component';

@Component({
  selector: 'app-lunch-easy',
  standalone: true,
  imports: [RecipeItemComponent],
  templateUrl: './lunch-easy.component.html',
  styleUrl: './lunch-easy.component.css'
})
export class LunchEasyComponent {
  public recipesService = inject(RecipesService)
}
