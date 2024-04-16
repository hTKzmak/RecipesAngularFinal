import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService{

  public recipesData: any[] = []
  public recipe: any = {}
  public moreRecipes: any[] = []

  // foods
  // public breakfastData: any[] = []
  public breakfastData = this.recipesData
  public lunchData: any[] = []
  public dinnerData: any[] = []
  
  // easy
  public easyBreakfastData: any[] = []
  public easyLunchData: any[] = []
  public easyDinnerData: any[] = []

  // medium
  public mediumBreakfastData: any[] = []
  public mediumLunchData: any[] = []
  public mediumDinnerData: any[] = []

  public getData(): void {
    fetch('https://dummyjson.com/recipes?limit=50')
      .then(res => res.json())
      .then(data => {
        this.recipesData = data.recipes
        console.log(this.recipesData)
      })
      // .then(() => this.breakfastData = this.recipesData.sort((el) => ...))
  }

  public getRecipe(id: string): void {
    console.log(id)
    fetch('https://dummyjson.com/recipes/' + id)
      .then(res => res.json())
      .then(data => {
        this.recipe = data
        console.log(this.recipe)
      })
  }

}
