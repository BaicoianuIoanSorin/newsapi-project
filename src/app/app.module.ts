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
  NbSidebarModule, NbSidebarComponent, NbListModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ArrowComponent } from '../components-util/arrow/arrow.component';
import {NewsApiService} from "./api/ NewsApiService";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NewsComponent} from "./news/news.component";
import {NgxsModule} from "@ngxs/store";
import {NewsState} from "./news/state";
import {NewsFetchInfo} from "./news/ news.actions";
import {NewsSelector} from "./news/news.selector";

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
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'corporate' }),
    NbSidebarModule.forRoot(),
    NgxsModule.forFeature([
       NewsState,
    ]),
    NbLayoutModule,
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
