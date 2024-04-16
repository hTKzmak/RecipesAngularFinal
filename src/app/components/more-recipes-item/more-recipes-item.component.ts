import { Component, Input, inject } from '@angular/core';
import { RecipesService } from '../../service/recipes.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-more-recipes-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './more-recipes-item.component.html',
  styleUrl: './more-recipes-item.component.css'
})
export class MoreRecipesItemComponent {
  public recipesService = inject(RecipesService)
  
  @Input() id: string = ''
  @Input() name: string = ''
  @Input() cookTimeMinutes: number = 0
  @Input() image: string = ''

  public getRecipeFunc(){
    this.recipesService.getRecipe(this.id)
  }
}
