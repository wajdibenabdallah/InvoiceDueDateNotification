import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from '../model/bill';

@Injectable({
  providedIn: 'root',
})
export class BillService {
  BASE_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public initMocks(MOCK_DATA: Bill[]): Observable<any> {
    return this.http.post<Observable<any>>(`${this.BASE_URL}/bill/init`, { bills: MOCK_DATA });
  }
}
