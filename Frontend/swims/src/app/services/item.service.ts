import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../interfaces/item.interface'; // Import the Item interface

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private baseUrl = 'http://localhost:8080/api/items';

  constructor(private http: HttpClient) { }

  getByStorageSpaceName(storageSpaceName: string): Observable<Item[]> {
    const url = `${this.baseUrl}/by-storage-space?storage_space_name=${storageSpaceName}`;
    return this.http.get<Item[]>(url);
  }
}