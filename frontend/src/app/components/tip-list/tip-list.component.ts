import { Component, Input } from '@angular/core';
import { ITip } from '../tip/tip.component';

@Component({
  selector: 'app-tip-list',
  templateUrl: './tip-list.component.html',
  styleUrls: ['./tip-list.component.scss'],
})
export class TipListComponent {
  @Input() onTipDelete: (id: number) => void;
  @Input() tips: ITip[];
}
