import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemDto } from '../dtos/item.dto';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ItemDataService {
  constructor(private http: HttpClient) {}

  fetchItems(): Observable<ItemDto[]> {
    return this.http.get<ItemDto[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
