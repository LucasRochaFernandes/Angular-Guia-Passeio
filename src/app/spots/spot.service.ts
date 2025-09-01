import { Injectable } from '@angular/core';
import { Spot } from './spot';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotService {
  private readonly BASE_URL = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {}

  create(spot: Spot): Observable<Spot> {
    return this.httpClient.post<Spot>(this.BASE_URL + '/spots', spot);
  }

  getAll(): Observable<Spot[]> {
    return this.httpClient.get<Spot[]>(this.BASE_URL + '/spots');
  }

  filter(name: string | null, category: string | null): Observable<Spot[]> {
    let params = new HttpParams();
    if (name && name.length) {
      params = params.set('name_like', name);
    }
    if (category && category !== 'all') {
      params = params.set('category', category);
    }
    return this.httpClient.get<Spot[]>(this.BASE_URL + '/spots', {
      params: params,
    });
  }
  update(spot: Spot): Observable<Spot> {
    const url = `${this.BASE_URL}/spots/${spot.id}`;
    return this.httpClient.put<Spot>(url, spot);
  }
  delete(id: string): Observable<void> {
    const url = `${this.BASE_URL}/spots/${id}`;
    return this.httpClient.delete<void>(url);
  }
}
