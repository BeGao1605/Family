import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { PersonalInfo2Component } from "./components/personal-info2/personal-info2.component";

@NgModule({
  declarations: [
    PersonalInfo2Component,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    PersonalInfo2Component,
  ],
})

export class PersionalInfo2LazyModule {}
