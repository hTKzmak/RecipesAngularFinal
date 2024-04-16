import { Component, inject } from '@angular/core';
import { RecipesService } from '../../../service/recipes.service';
import { RecipeItemComponent } from '../../../components/recipe-item/recipe-item.component';

@Component({
  selector: 'app-dinner-all',
  standalone: true,
  imports: [RecipeItemComponent],
  templateUrl: './dinner-all.component.html',
  styleUrl: './dinner-all.component.css'
})
export class DinnerAllComponent {
  public recipesService = inject(RecipesService)
}
