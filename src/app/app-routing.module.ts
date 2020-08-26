import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './components/countries/countries.component';
import { DragComponent } from './components/drag/drag.component';
import { VirtualComponent } from './components/virtual/virtual.component';

const routes: Routes = [
  {path: 'countries', component: CountriesComponent},
  {path: 'drag', component: DragComponent},
  {path: 'virtual', component: VirtualComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'countries'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
