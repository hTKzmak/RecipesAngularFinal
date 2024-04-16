import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService{

  public recipesData: any[] = []
  public recipe: any = {}
  public moreRecipes: any[] = []

  // foods
  public breakfastData: any[] = []
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
      .then(() => this.breakfastData = this.recipesData.filter((el) => el.mealType.includes('Breakfast')))
      .then(() => this.easyBreakfastData = this.breakfastData.filter((el) => el.difficulty == 'Easy'))
      .then(() => this.mediumBreakfastData = this.breakfastData.filter((el) => el.difficulty == 'Medium'))

      .then(() => this.lunchData = this.recipesData.filter((el) => el.mealType.includes('Lunch')))
      .then(() => this.easyLunchData = this.lunchData.filter((el) => el.difficulty == 'Easy'))
      .then(() => this.mediumLunchData = this.lunchData.filter((el) => el.difficulty == 'Medium'))

      .then(() => this.dinnerData = this.recipesData.filter((el) => el.mealType.includes('Dinner')))
      .then(() => this.easyDinnerData = this.dinnerData.filter((el) => el.difficulty == 'Easy'))
      .then(() => this.mediumDinnerData = this.dinnerData.filter((el) => el.difficulty == 'Medium'))

      .finally(() => this.moreRecipes = this.recipesData.sort(() => 0.5 - Math.random()).slice(0, 6))
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
