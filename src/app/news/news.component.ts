import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {NewsFetchInfo, NewsReset} from "./ news.actions";
import {NewsSelector} from "./news.selector";
import {Observable} from "rxjs";
import {NewsApiService} from "../api/ NewsApiService";
import { DOCUMENT } from '@angular/common';
import { NbSearchService } from '@nebular/theme';
import {Main} from "../model/main";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy{

  alive = true;

  @Select(NewsSelector.news)
  news$: Observable<Main> | undefined;

  @Select(NewsSelector.nameOfNews)
  nameOfNews$: Observable<string> | undefined;

  @Select(NewsSelector.id)
  id$: Observable<string> | undefined;

  @Select(NewsSelector.args)
  args$: Observable<string> | undefined;

  @Select(NewsSelector.isFetching)
  isFetching$: Observable<boolean> | undefined;

  @Select(NewsSelector.isStatusOK)
  isStatusOK$: Observable<boolean> | undefined;

  @Select(NewsSelector.totalResults)
  totalResults$: Observable<number> | undefined;
  
  constructor(@Inject(DOCUMENT) private document: Document,
              private store: Store,
              private nbSearchService: NbSearchService,
              private newsApiService: NewsApiService) {
  }

  populateTopHeadlines: boolean = true;
  ngOnInit(): void {
    this.store.dispatch(new NewsFetchInfo());
  }

  redirectToNewsPage(url : string) {
      this.document.location.href = url;
  }

  ngOnDestroy() {
    this.alive = false;
    this.store.dispatch(new NewsReset());
  }
}
