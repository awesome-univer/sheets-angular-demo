import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePage } from './home-page/home-page.component';
import { UniverSheets } from './univer-sheets/univer-sheets.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomePage },
    ])
  ],
  declarations: [
    AppComponent,
    HomePage,
    UniverSheets
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
