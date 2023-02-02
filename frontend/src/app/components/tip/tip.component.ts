import { Component, Input } from '@angular/core';

export interface ITip {
  id?: number;
  percent: number;
  totalPrice: number;
}

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.scss'],
})
export class TipComponent {
  @Input() onTipDelete: (id: number) => void;
  @Input() index: number;
  @Input() tip: ITip;
  isHovering: boolean;
  displayText: string;

  onMouseChange(isHovering: boolean) {
    this.isHovering = isHovering;
  }

  onClick = () => this.onTipDelete(this.tip.id!);

  ngOnInit() {
    const tip = this.tip;
    const tipAmount = tip.percent * 0.01 * tip.totalPrice;
    this.displayText = `${this.index}) ${tip.totalPrice}$ * ${tip.percent}% = ${tipAmount}$ Tip Recieved`;
  }
}
