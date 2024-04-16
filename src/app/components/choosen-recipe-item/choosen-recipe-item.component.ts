import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-choosen-recipe-item',
  standalone: true,
  imports: [],
  templateUrl: './choosen-recipe-item.component.html',
  styleUrl: './choosen-recipe-item.component.css'
})
export class ChoosenRecipeItemComponent {
  @Input() id: string = ''
  @Input() name: string = ''
  @Input() instructions: any = []
  @Input() calories: number = 0
  @Input() rating: number = 0
  @Input() prepTimeMinutes: number = 0
  @Input() cookTimeMinutes: number = 0
  @Input() image: string = ''
}
