import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpotComponent } from './spot/spot.component';

const routes: Routes = [
  {
    path: '',
    component: SpotComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpotsRoutingModule {}
