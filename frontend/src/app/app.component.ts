import { Component } from '@angular/core';
import { ITip } from './components/tip/tip.component';
import { TipsApiService } from './services/tips-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Tip Calculator';
  path: string = '../assets/github.png';
  tips: ITip[] = [];

  constructor(private tipsApi: TipsApiService) {}

  handleTipDelete = async (id: number) => {
    await this.tipsApi.deleteTip(id);
    this.tips = await this.tipsApi.getTips();
  };

  handleTipCreate = async (totalPrice: number, percent: number) => {
    await this.tipsApi.createTip(totalPrice, percent);
    this.tips = await this.tipsApi.getTips();
  };

  async ngOnInit() {
    this.tips = await this.tipsApi.getTips();
  }
}
