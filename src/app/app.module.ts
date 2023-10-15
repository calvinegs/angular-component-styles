import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildFirstComponent } from './pages/child-first/child-first.component';
import { ChildSecondComponent } from './pages/child-second/child-second.component';
import { ChildThirdComponent } from './pages/child-third/child-third.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildFirstComponent,
    ChildSecondComponent,
    ChildThirdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
