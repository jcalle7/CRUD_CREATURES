import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DuendeService {
  private apiURL = 'http://localhost:3200/duendes'

  constructor(private http: HttpClient) { }

  getDuende(): Observable<any[]>{
    return this.http.get<any[]>(this.apiURL)
  }
}
