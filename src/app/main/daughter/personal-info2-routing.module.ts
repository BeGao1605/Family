import { Routes } from "@angular/router";
import { AppComponent } from "src/app/app.component";
import { PersonalInfo2Component } from "./components/personal-info2/personal-info2.component";

const routes: Routes = [{
  path: '',
  component: AppComponent,
  data: {
    pageTitle: 'Litte Princess',
  },
  children: [{
    path: '',
    component: PersonalInfo2Component,
  }]
}]

export class PersonalInfo2RoutingModule {}
