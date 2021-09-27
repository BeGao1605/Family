import { NgModule } from "@angular/core";
import { NaviBarLazyModule } from "./navi-bar-lazy.module";
import { NaviBarService } from "./services/navi-bar.service";

@NgModule({
  imports:[
    NaviBarLazyModule,
  ],
  exports: [
    NaviBarLazyModule,
  ],
  providers: [
    NaviBarService,
  ]
})

export class NaviBarModule {}
