import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ITip } from '../components/tip/tip.component';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class TipsApiService {
  constructor(private http: HttpClient) {}

  async getTips() {
    return await lastValueFrom(this.http.get<ITip[]>(`${apiUrl}/tips`));
  }

  async createTip(totalPrice: number, percent: number) {
    return await lastValueFrom(
      this.http.post<ITip>(`${apiUrl}/tips`, {
        totalPrice,
        percent,
      })
    );
  }

  async deleteTip(id: number) {
    return await lastValueFrom(this.http.delete(`${apiUrl}/tips/${id}`));
  }
}
