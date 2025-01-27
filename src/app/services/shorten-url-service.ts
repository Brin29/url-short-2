import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUrlResults } from '../url';

@Injectable({
  providedIn: 'root'
})
export class ShortenUrlService {

  constructor(private http: HttpClient) {}

  shortenUrl(url:any): Observable<IUrlResults>{
    return this.http.post<IUrlResults>("http://localhost:8080/api/url", url);
  }
}
