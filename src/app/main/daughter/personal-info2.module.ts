import { NgModule } from "@angular/core";
import { PersionalInfo2LazyModule } from "./personal-info2-lazy.module";
import { PersonalInfo2Service } from "./services/personal-info2.service";

@NgModule({
  imports: [
    PersionalInfo2LazyModule,
  ],
  exports: [
    PersionalInfo2LazyModule,
  ],
  providers: [
    PersonalInfo2Service,
  ],
})

export class PersonalInfo2Module {}
