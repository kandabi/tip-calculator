import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ITip } from '../components/tip/tip.component';

const BASE_URL = 'http://localhost:8000';

@Injectable({
  providedIn: 'root',
})
export class TipsApiService {
  constructor(private http: HttpClient) {}

  async getTips() {
    return await lastValueFrom(this.http.get<ITip[]>(`${BASE_URL}/tips`));
  }

  async createTip(totalPrice: number, percent: number) {
    return await lastValueFrom(
      this.http.post<ITip>(`${BASE_URL}/tips`, {
        totalPrice,
        percent,
      })
    );
  }

  async deleteTip(id: number) {
    return await lastValueFrom(this.http.delete(`${BASE_URL}/tips/${id}`));
  }
}
