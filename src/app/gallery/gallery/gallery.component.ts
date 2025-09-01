import { Component } from '@angular/core';
import { SpotService } from '../../spots/spot.service';
import { Spot } from '../../spots/spot';
import { Category } from '../../categories/category';
import { CategoryService } from '../../categories/category.service';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  spots: Spot[] = [];
  categoriesFilter: Category[] = [];
  valueCategoryFilter: string = '';
  nameSpotFilter: string = '';

  constructor(
    private readonly spotService: SpotService,
    private readonly categoriesService: CategoryService
  ) {}
  ngOnInit(): void {
    this.spotService.getAll().subscribe({
      next: (result) => (this.spots = result),
      error: (error) => console.error(error),
    });
    this.categoriesService.getAll().subscribe({
      next: (result) => (this.categoriesFilter = result),
      error: (error) => console.error(error),
    });
  }
  onFilter() {
    this.spotService.filter(this.nameSpotFilter, this.valueCategoryFilter).subscribe({
      next: (result) => (this.spots = result),
      error: (error) => console.log(error),
    });
  }
}
