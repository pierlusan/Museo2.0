import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ApiResult {
  page: number;
  data: any[];
  total_pages: number;
  total_results: number;
}

@Injectable({
  providedIn: 'root'
})
export class OperaService {

  constructor(private http: HttpClient) { }

  getOpere(page = 1): Observable<ApiResult>{
    return this.http.get<ApiResult>(`${environment.baseUrl}/artworks?page=${page}`);
  }

  getOperaDetails(id: string | null): Observable<ApiResult>{
    return this.http.get<ApiResult>(`${environment.baseUrl}/artworks/${id}`);

  }

  getByFilter(filter: string) {
    return this.http.get<ApiResult>(`${environment.baseUrl}/artworks/search?query[term][title]=${filter}&query[term][artist_title]=${filter}&operator=OR`);
  }


}
