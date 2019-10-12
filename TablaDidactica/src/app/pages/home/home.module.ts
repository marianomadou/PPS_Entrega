import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { MenuComponent } from './menu/menu.component';
import { AnimalsComponent } from './animals/animals.component';
import { ColorsComponent } from './colors/colors.component';
import { NumbersComponent } from './numbers/numbers.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      {
        path: 'menu',
        component: MenuComponent
      },
      {
        path: 'animals',
        component: AnimalsComponent
      },
      {
        path: 'colors',
        component: ColorsComponent
      },
      {
        path: 'numbers',
        component: NumbersComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [HomePage, MenuComponent, AnimalsComponent, ColorsComponent, NumbersComponent]
})
export class HomePageModule {}
