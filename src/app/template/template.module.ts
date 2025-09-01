import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { CategoriesModule } from '../categories/categories.module';
import { SpotsModule } from '../spots/spots.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, TemplateRoutingModule, CategoriesModule, SpotsModule],
})
export class TemplateModule {}
