import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../categories/category';
import { CategoryService } from '../../categories/category.service';
import { SpotService } from '../spot.service';
import { Spot } from '../spot';

@Component({
  selector: 'app-spot',
  standalone: false,
  templateUrl: './spot.component.html',
  styleUrl: './spot.component.scss',
})
export class SpotComponent implements OnInit {
  formGroup: FormGroup;
  categories: Category[] = [];
  spots: Spot[] = [];
  isEditing = false;
  editingSpotId: string | null = null;

  constructor(
    private readonly categoryService: CategoryService,
    private readonly spotService: SpotService
  ) {
    this.formGroup = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(50),
      ]),
      category: new FormControl(null, [Validators.required]),
      location: new FormControl('', [Validators.required]),
      urlPhoto: new FormControl('', [Validators.required]),
      review: new FormControl(1, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.loadInitialData();
  }

  loadInitialData(): void {
    this.categoryService.getAll().subscribe({
      next: (result) => (this.categories = result),
      error: (err) => console.error('Erro ao carregar categorias:', err),
    });
    this.loadSpots();
  }

  loadSpots(): void {
    this.spotService.getAll().subscribe({
      next: (result) => (this.spots = result),
      error: (err) => console.error('Erro ao carregar lugares:', err),
    });
  }

  onEdit(spot: Spot): void {
    this.isEditing = true;
    this.editingSpotId = spot.id;
    this.formGroup.patchValue(spot);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onDelete(id: string): void {
    if (confirm('Tem certeza que deseja excluir este lugar?')) {
      this.spotService.delete(id).subscribe({
        next: () => this.loadSpots(),
        error: (err) => console.error('Erro ao excluir lugar:', err),
      });
    }
  }

  onCancelEdit(): void {
    this.isEditing = false;
    this.editingSpotId = null;
    this.formGroup.reset({ review: 1, category: null });
  }

  onSaveSpot() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) {
      return;
    }

    if (this.isEditing && this.editingSpotId) {
      const spotToUpdate: Spot = { id: this.editingSpotId, ...this.formGroup.value };
      this.spotService.update(spotToUpdate).subscribe({
        next: () => {
          this.loadSpots();
          this.onCancelEdit();
        },
        error: (err) => console.error('Erro ao atualizar lugar:', err),
      });
    } else {
      const spotToSave: Spot = { id: crypto.randomUUID(), ...this.formGroup.value };
      this.spotService.create(spotToSave).subscribe({
        next: () => {
          this.loadSpots();
          this.formGroup.reset({ review: 1, category: null });
        },
        error: (err) => console.error('Erro ao criar lugar:', err),
      });
    }
  }
}
