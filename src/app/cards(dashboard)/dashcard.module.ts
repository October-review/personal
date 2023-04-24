import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
// import { MatNativeDateModule } from "@angular/material/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { Dashcard } from "./dashcard.component";

@NgModule({
    declarations: [Dashcard],
    imports: [
      CommonModule,
      BrowserAnimationsModule,
      BrowserModule,
      FormsModule,
      MatCardModule,
      HttpClientModule,
      ReactiveFormsModule,
   
    ],
    exports : [Dashcard],
    schemas : [CUSTOM_ELEMENTS_SCHEMA],
  })
  export class DashboardCardModule {}

  

