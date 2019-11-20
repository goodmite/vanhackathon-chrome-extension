import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) {
  }

  makeGetReq<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url);
  }
  makePostReq<T>(url: string, body:any): Observable<T> {
    return this.httpClient.post<T>(url, body);
  }
  makePutReq<T>(url: string, body:any): Observable<T> {
    return this.httpClient.put<T>(url, body);
  }
}
