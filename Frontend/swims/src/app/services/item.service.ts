import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Item } from '../interfaces/item.interface'; // Import the Item interface
import { tap, catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private baseUrl = 'http://localhost:8080/api/items';
  storageSpaceName: string = '';

  constructor(private http: HttpClient) { }

  setStorageSpaceName(storageSpaceName: string){
    this.storageSpaceName = storageSpaceName;
  }

  getByStorageSpaceName(storageSpaceName: string): Observable<Item[]> {
    const url = `${this.baseUrl}/by-storage-space?storage_space_name=${storageSpaceName}`;
    return this.http.get<Item[]>(url);
  }

  deleteItem(name: string, storageSpaceName: string) {
    // Create HTTP Params
    let params = new HttpParams()
      .set('name', name)
      .set('storage_space_name', storageSpaceName);

    // Send the delete request with the query parameters
    return this.http.delete('http://localhost:8080/api/items/delete/item', { params }).pipe(
      switchMap(() => this.getByStorageSpaceName(storageSpaceName)),
      catchError(this.handleError<Item>('deleteItem')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  createItem(item: Item) {
    item.name = this.sanitizeItemName(item.name);
    return this.http.post('http://localhost:8080/api/items/create/item', item );
  }

  private sanitizeItemName(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-');
}

}