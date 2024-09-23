import { Routes } from '@angular/router';
import { MainPageComponent } from './Core/Components/main-page/main-page.component';

export const routes: Routes = [
    { path: '**', component: MainPageComponent }
  ];
