import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { PersonalInforComponent } from "./components/personal-infor/personal-infor.component";

@NgModule({
  declarations: [
    PersonalInforComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    PersonalInforComponent,
  ],
})

export class PersionalInfoLazyModule {}
