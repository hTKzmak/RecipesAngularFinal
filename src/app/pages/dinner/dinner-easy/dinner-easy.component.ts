import { Component, inject } from '@angular/core';
import { RecipesService } from '../../../service/recipes.service';
import { RecipeItemComponent } from '../../../components/recipe-item/recipe-item.component';

@Component({
  selector: 'app-dinner-easy',
  standalone: true,
  imports: [RecipeItemComponent],
  templateUrl: './dinner-easy.component.html',
  styleUrl: './dinner-easy.component.css'
})
export class DinnerEasyComponent {
  public recipesService = inject(RecipesService)
}
