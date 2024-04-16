import { Component, inject } from '@angular/core';
import { RecipeItemComponent } from '../../../components/recipe-item/recipe-item.component';
import { RecipesService } from '../../../service/recipes.service';

@Component({
  selector: 'app-breakfast-all',
  standalone: true,
  imports: [RecipeItemComponent],
  templateUrl: './breakfast-all.component.html',
  styleUrl: './breakfast-all.component.css'
})
export class BreakfastAllComponent {
  public recipesService = inject(RecipesService)
}
