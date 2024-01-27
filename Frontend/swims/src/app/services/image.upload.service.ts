import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
  private uploadUrl = 'http://localhost:8080/api/images/upload/image/png';

  constructor(private http: HttpClient) { }

  uploadImage(imageFile: File): Observable<string> {
    const formData = new FormData();
    formData.append('file', imageFile);

    return this.http.post(this.uploadUrl, formData, {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      }),
      responseType: 'text'
    }).pipe(
        map(response => {
          const prefix = "Image uploaded successfully with ID:";
          if (response.startsWith(prefix)) {
            return response.substring(prefix.length).trim();
          } else {
            throw new Error('Unexpected response format');
          }
        })
      );
  }
}
