import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TipListComponent } from './components/tip-list/tip-list.component';
import { TipEditorComponent } from './components/tip-editor/tip-editor.component';
import { TipComponent } from './components/tip/tip.component';

@NgModule({
  declarations: [AppComponent, TipListComponent, TipEditorComponent, TipComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
