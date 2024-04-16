import { Routes } from '@angular/router';
import { BasePageComponent } from './pages/base-page/base-page.component';
import { BreakfastAllComponent } from './pages/breakfast/breakfast-all/breakfast-all.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { BreakfastEasyComponent } from './pages/breakfast/breakfast-easy/breakfast-easy.component';
import { BreakfastMediumComponent } from './pages/breakfast/breakfast-medium/breakfast-medium.component';
import { LunchAllComponent } from './pages/lunch/lunch-all/lunch-all.component';
import { LunchEasyComponent } from './pages/lunch/lunch-easy/lunch-easy.component';
import { LunchMediumComponent } from './pages/lunch/lunch-medium/lunch-medium.component';
import { DinnerAllComponent } from './pages/dinner/dinner-all/dinner-all.component';
import { DinnerEasyComponent } from './pages/dinner/dinner-easy/dinner-easy.component';
import { DinnerMediumComponent } from './pages/dinner/dinner-medium/dinner-medium.component';
import { ChoosenRecipeItemPageComponent } from './pages/choosen-recipe-item-page/choosen-recipe-item-page.component';

export const routes: Routes = [
    {path: 'breakfast', component: BasePageComponent, children: [
        {path: 'all', component: BreakfastAllComponent},
        {path: 'easy', component: BreakfastEasyComponent},
        {path: 'medium', component: BreakfastMediumComponent},
        {path: '', redirectTo: '/breakfast/all', pathMatch: 'full'},
    ]},
    {path: 'lunch', component: BasePageComponent, children: [
        {path: 'all', component: LunchAllComponent},
        {path: 'easy', component: LunchEasyComponent},
        {path: 'medium', component: LunchMediumComponent},
        {path: '', redirectTo: '/lunch/all', pathMatch: 'full'},
    ]},
    {path: 'dinner', component: BasePageComponent, children: [
        {path: 'all', component: DinnerAllComponent},
        {path: 'easy', component: DinnerEasyComponent},
        {path: 'medium', component: DinnerMediumComponent},
        {path: '', redirectTo: '/dinner/all', pathMatch: 'full'},
    ]},
    {path: 'recipe/:id', component: ChoosenRecipeItemPageComponent},
    {path: '', redirectTo: 'breakfast/all', pathMatch: 'full'},
    {path: '**', component: NotFoundPageComponent},
];
