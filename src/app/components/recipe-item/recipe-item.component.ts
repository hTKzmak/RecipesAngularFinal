import { Component, Input, inject } from '@angular/core';
import { RecipesService } from '../../service/recipes.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  public recipesService = inject(RecipesService)

  @Input() id: string = ''
  @Input() name: string = ''
  @Input() ingredients: any = []
  @Input() calories: number = 0
  @Input() rating: number = 0
  @Input() prepTimeMinutes: number = 0
  @Input() cookTimeMinutes: number = 0
  @Input() image: string = ''


  public getRecipeFunc(){
    this.recipesService.getRecipe(this.id)
  }
}
