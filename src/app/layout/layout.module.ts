import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { HeaderComponent } from "./header/header.component";
import { ContentWrapperComponent } from "./content-wrapper/content-wrapper.component";
import { SharedModule } from "../components/shared/shared.module";

@NgModule({
  declarations: [
    HeaderComponent,
    ContentWrapperComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ],
  exports: [
    ContentWrapperComponent,
  ]
})

export class LayoutModule {}
