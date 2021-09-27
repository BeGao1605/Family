import { NaviBarComponent } from "./components/navi-bar/navi-bar.component";
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    NaviBarComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    NaviBarComponent,
  ]
})
export class NaviBarLazyModule {}
