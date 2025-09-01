import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { SpotsRoutingModule } from './spots-routing.module';
import { SpotComponent } from './spot/spot.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SpotComponent],
  imports: [CommonModule, SpotsRoutingModule, ReactiveFormsModule, RatingModule, FormsModule],
})
export class SpotsModule {}
