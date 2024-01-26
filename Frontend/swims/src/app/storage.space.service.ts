import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { tap, catchError, switchMap } from 'rxjs/operators';

interface Tag {
  name: string;
  color: string;
}

interface StorageSpace {
  name: string;
  description: string;
  imageUUID: string;
  tags: Tag[];
  imageURL?: string;
}

@Injectable({
  providedIn: 'root'
})
export class StorageSpaceService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  fetchStorageSpaces(): Observable<StorageSpace[]> {
    return this.http.get<StorageSpace[]>(`${this.apiUrl}/storagespaces`).pipe(
      switchMap(storageSpaces => {
        const fetchImages$ = storageSpaces.map(ss => this.fetchPhoto(ss.imageUUID).pipe(
          tap(blob => ss.imageURL = URL.createObjectURL(blob)),
          catchError(error => {
            console.error('Fetching image of ID: ${ss.imageUUID} was unsuccesfull - ${error.message}');
            ss.imageURL = '../assets/images/image_not_found.png';
            return of(null);
          })
        ));
        return forkJoin(fetchImages$).pipe(
          switchMap(() => [storageSpaces])
        );
      }),
      catchError(this.handleError('fetchStorageSpaces', []))
    );
  }

  deleteStorageSpace(name: string): Observable<StorageSpace[]> {
    return this.http.delete(`${this.apiUrl}/storagespace/${name}`).pipe(
      switchMap(() => this.fetchStorageSpaces()), // Refetch the storage spaces after deleting
      catchError(this.handleError<StorageSpace[]>('deleteStorageSpace'))
    );
  }

  private fetchPhoto(imageUUID: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/images/get/image/png/${imageUUID}`, { responseType: 'blob' });
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}