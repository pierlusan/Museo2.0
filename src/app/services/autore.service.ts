import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
export class AutoreService {

  constructor(private http: HttpClient) { }

  getAutoreDetails(id: string | null): Observable<ApiResult>{
    return this.http.get<ApiResult>(`${environment.baseUrl}/artists/${id}`);
  }

  getByFilter(filter: string) {
    return this.http.get<ApiResult>(`${environment.baseUrl}/artists/search?query[term][title]=${filter}`);
  }
}
