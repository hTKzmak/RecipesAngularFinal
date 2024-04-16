import { Component, inject } from '@angular/core';
import { RecipesService } from '../../../service/recipes.service';
import { RecipeItemComponent } from '../../../components/recipe-item/recipe-item.component';

@Component({
  selector: 'app-breakfast-easy',
  standalone: true,
  imports: [RecipeItemComponent],
  templateUrl: './breakfast-easy.component.html',
  styleUrl: './breakfast-easy.component.css'
})
export class BreakfastEasyComponent {
  public recipesService = inject(RecipesService)
}
