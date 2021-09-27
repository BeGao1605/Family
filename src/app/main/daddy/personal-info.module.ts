import { NgModule } from "@angular/core";
import { PersionalInfoLazyModule } from "./personal-info-lazy.module";
import { PersonalInfoService } from "./services/personal-info.service";

@NgModule({
  imports: [
    PersionalInfoLazyModule,
  ],
  exports: [
    PersionalInfoLazyModule,
  ],
  providers: [
    PersonalInfoService,
  ]
})

export class PersonalInfoModule {}
