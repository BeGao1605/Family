import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInfoModule } from './main/daddy/personal-info.module';
import { PersonalInfo2Module } from './main/daughter/personal-info2.module';
import { NaviBarModule } from './main/navi-bar/navi-bar.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NaviBarModule,
    PersonalInfoModule,
    PersonalInfo2Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
