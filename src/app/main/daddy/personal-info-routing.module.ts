import { Routes } from "@angular/router";
import { AppComponent } from "src/app/app.component";
import { PersonalInforComponent } from "./components/personal-infor/personal-infor.component";

const routes: Routes = [{
  path: '',
  component: AppComponent,
  data: {
    pageTitle: 'Daddy, I love you 3000',
  },
  children: [{
    path: '',
    component: PersonalInforComponent,
  }]
}]

export class PersonalInfoRoutingModule {}
