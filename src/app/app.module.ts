import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbCardModule,
  NbActionsModule,
  NbSidebarService,
  NbSidebarModule, NbSidebarComponent, NbListModule, NbMenuModule, NbButtonModule, NbSearchModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ArrowComponent } from '../components-util/arrow/arrow.component';
import {HttpClientModule} from "@angular/common/http";
import {NewsComponent} from "./news/news.component";
import {NgxsModule} from "@ngxs/store";
import {NewsState} from "./news/state";
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import {NewsApiKeyConfig, NgnewsModule} from "angular-news-api";
import {NewsApiService} from "./api/ NewsApiService";
import { NbMenuInternalService } from '@nebular/theme/components/menu/menu.service';

@NgModule({
  declarations: [
    AppComponent,
    ArrowComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NbSearchModule,
    NbMenuModule.forRoot(),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'corporate' }),
    NbSidebarModule.forRoot(),
    NgxsModule.forRoot([NewsState], {
      developmentMode: true
    }),
    NgxsLoggerPluginModule.forRoot({
      disabled: false
    }),
    NbLayoutModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbCardModule,
    NbActionsModule,
    NbListModule,
  ],
  providers: [NewsApiService,
  NewsState],
  bootstrap: [AppComponent]
})
export class AppModule { }
