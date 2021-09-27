import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NaviBarLazyModule } from "./navi-bar-lazy.module";

const routes: Routes = [
  {
    path: ''
  }
];

@NgModule({
  imports: [
    NaviBarLazyModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class NaviBarRoutingModule {}
