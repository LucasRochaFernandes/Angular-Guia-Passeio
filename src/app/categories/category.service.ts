import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private readonly BASE_URL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  create(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(this.BASE_URL + '/categories', category);
  }
  getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.BASE_URL + '/categories');
  }
  update(category: Category): Observable<Category> {
    const url = `${this.BASE_URL}/categories/${category.id}`;
    return this.httpClient.put<Category>(url, category);
  }
  delete(id: string): Observable<void> {
    const url = `${this.BASE_URL}/categories/${id}`;
    return this.httpClient.delete<void>(url);
  }
}
