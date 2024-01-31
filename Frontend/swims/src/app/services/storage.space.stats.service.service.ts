import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageSpaceStat } from '../interfaces/storage.space.stats.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageSpaceStatsServiceService {

  private apiUrl = 'http://localhost:8080/api/storagespaces/stats';

  constructor(private http: HttpClient) { }

  fetchStorageSpaceStats(): Observable<StorageSpaceStat[]> {
    return this.http.get<StorageSpaceStat[]>(this.apiUrl);
  }
}
