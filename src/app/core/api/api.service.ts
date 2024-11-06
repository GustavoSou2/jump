import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService<T> {
  url: string = 'https://jump-api-v1.vercel.app/api/v1/';

  constructor(@Inject(HttpClient) private http: HttpClient) {}

  findAll(route: string) {
    return this.http.get<T[]>(`${this.url}${route}`);
  }

  findOne(route: string, id: string) {
    return this.http.get<T>(`${this.url}${route}/${id}`);
  }

  create(route: string, data: T) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.url}${route}`, data, { headers });
  }

  update(route: string, id: string, data: T) {
    return this.http.put<any>(`${this.url}${route}/${id}`, data);
  }

  delete(id: string) {
    return null;
  }
}
