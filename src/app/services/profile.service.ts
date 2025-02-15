import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private apiUrl = 'http://localhost:8080/api/profiles';

  constructor(private http: HttpClient) { }

  getProfiles(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createProfile(profile: any): Observable<any> {
    return this.http.post(this.apiUrl, profile);
  }

  updateProfile(id: number, profile: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, profile);
  }

  deleteProfile(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
