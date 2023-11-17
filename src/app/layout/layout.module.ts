import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { HeaderComponent } from "./header/header.component";
import { ContentWrapperComponent } from "./content-wrapper/content-wrapper.component";

@NgModule({
  declarations: [
    HeaderComponent,
    ContentWrapperComponent,
  ],
  imports: [
    RouterModule
  ],
  exports: [
    ContentWrapperComponent,
  ]
})

export class LayoutModule {}
