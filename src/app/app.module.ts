import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import { SlipsComponent } from './main/slips/slips.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTabsModule} from "@angular/material/tabs";
import {SharedModule} from "./shared/shared.module";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    SlipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    SharedModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
