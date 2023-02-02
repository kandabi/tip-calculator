import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tip-editor',
  templateUrl: './tip-editor.component.html',
  styleUrls: ['./tip-editor.component.scss'],
})
export class TipEditorComponent {
  @Input() onTipCreate: (totalPrice: number, percent: number) => void;
  @Input() totalPrice: number = 50;
  @Input() percent: number = 10;

  onAmountChange({ target }: any) {
    this.totalPrice = parseFloat(target.value);
    console.log('this.amount', this.totalPrice);
  }

  onPercentChange({ target }: any) {
    this.percent = parseFloat(target.value);
    console.log('e.target.values', target.value!);
  }

  onCreateTipClick() {
    this.onTipCreate(this.totalPrice, this.percent);
  }
}
