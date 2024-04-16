import { Component, inject } from '@angular/core';
import { ChoosenRecipeItemComponent } from '../../components/choosen-recipe-item/choosen-recipe-item.component';
import { MoreRecipesListComponent } from '../../components/more-recipes-list/more-recipes-list.component';
import { RecipesService } from '../../service/recipes.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-choosen-recipe-item-page',
  standalone: true,
  imports: [ChoosenRecipeItemComponent, MoreRecipesListComponent],
  templateUrl: './choosen-recipe-item-page.component.html',
  styleUrl: './choosen-recipe-item-page.component.css'
})
export class ChoosenRecipeItemPageComponent {
  public recipesService = inject(RecipesService)

  constructor(private location: Location) {}

  goBackToPrevPage(): void {
    this.location.back();
  }
}
