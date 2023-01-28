import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbCardModule,
  NbActionsModule,
  NbSidebarService,
  NbSidebarModule, NbSidebarComponent, NbListModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {NewsComponent} from "./news.component";
import {AppRoutingModule} from "../app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {NewsRoutingModule} from "./news-routing.module";
import {NewsApiService} from "../api/ NewsApiService";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    NewsComponent,
  ],
  imports: [
    HttpClientModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbActionsModule,
    NbListModule,
    NewsRoutingModule,
  ],
  providers: [NewsApiService],
  bootstrap: [NewsComponent]
})
export class NewsModule { }
