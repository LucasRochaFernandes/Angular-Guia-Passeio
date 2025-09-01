import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'categorias',
        loadChildren: () =>
          import('../categories/categories.module').then((m) => m.CategoriesModule),
      },
      {
        path: 'lugares',
        loadChildren: () => import('../spots/spots.module').then((m) => m.SpotsModule),
      },
      {
        path: 'galeria',
        loadChildren: () => import('../gallery/gallery.module').then((m) => m.GalleryModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplateRoutingModule {}
