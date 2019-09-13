import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './WarningAlert/warning-alert.component';
import { SuccessComponent } from './successAlert/success.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
