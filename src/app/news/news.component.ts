import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewsApiService} from "../api/ NewsApiService";
import {Select, Store} from "@ngxs/store";
import {NewsFetchInfo, NewsReset} from "./ news.actions";
import {NewsSelector} from "./news.selector";
import {Observable} from "rxjs";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy{

  alive = true;

  @Select(NewsSelector.news)
  news$: Observable<any[]> | undefined;

  @Select(NewsSelector.isFetching)
  isFetching$: Observable<boolean> | undefined;

  @Select(NewsSelector.isStatusOK)
  isStatusOK$: Observable<boolean> | undefined;

  @Select(NewsSelector.totalResults)
  totalResults$: Observable<number> | undefined;
  constructor(private store: Store) {
  }

  ngOnInit()  {
    this.store.dispatch(new NewsFetchInfo());
  }

  ngOnDestroy() {
    this.alive = false;
    this.store.dispatch(new NewsReset());
  }
}
