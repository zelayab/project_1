import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/interfaces/item';

@Injectable({
  providedIn: 'root',
})
export class ItemListService {
  constructor(private http: HttpClient) {}

  getItemList() {
    return this.http.get<Item[]>('assets/items.json');
  }
}
