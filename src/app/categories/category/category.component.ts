import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';
import { Category } from '../category';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent implements OnInit {
  formGroup: FormGroup;

  categories: Category[] = [];
  isEditing = false;
  editingCategoryId: string | null = null;

  constructor(private service: CategoryService) {
    this.formGroup = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(100),
      ]),
    });
  }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.service.getAll().subscribe({
      next: (data) => (this.categories = data),
      error: (err) => console.error('Erro ao carregar categorias:', err),
    });
  }

  onEdit(category: Category): void {
    this.isEditing = true;
    this.editingCategoryId = category.id;
    this.formGroup.patchValue(category);
  }

  onDelete(categoryId: string): void {
    if (
      confirm('Tem certeza que deseja excluir esta categoria? Esta ação não pode ser desfeita.')
    ) {
      this.service.delete(categoryId).subscribe({
        next: () => {
          this.loadCategories();
        },
        error: (err) => console.error('Erro ao excluir categoria:', err),
      });
    }
  }

  onCancelEdit(): void {
    this.isEditing = false;
    this.editingCategoryId = null;
    this.formGroup.reset();
  }

  onSaveCategory() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) {
      return;
    }

    if (this.isEditing && this.editingCategoryId) {
      const categoryToUpdate: Category = {
        id: this.editingCategoryId,
        ...this.formGroup.value,
      };
      this.service.update(categoryToUpdate).subscribe({
        next: () => {
          this.loadCategories();
          this.onCancelEdit();
        },
        error: (err) => console.error('Erro ao atualizar categoria:', err),
      });
    } else {
      const categoryToSave: Category = {
        id: crypto.randomUUID(),
        ...this.formGroup.value,
      };
      this.service.create(categoryToSave).subscribe({
        next: () => {
          this.loadCategories();
          this.formGroup.reset();
        },
        error: (err) => console.error('Erro ao criar categoria:', err),
      });
    }
  }
}
