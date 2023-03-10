import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {NewsFetchInfo, NewsReset} from "./ news.actions";
import {NewsSelector} from "./news.selector";
import {Observable} from "rxjs";
import {NewsApiService} from "../api/ NewsApiService";
import { DOCUMENT } from '@angular/common';
import { NbSearchService } from '@nebular/theme';

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
  
  constructor(@Inject(DOCUMENT) private document: Document,
              private store: Store,
              private nbSearchService: NbSearchService,
              private newsApiService: NewsApiService) {
  }


  topHeadlines: any = [];
  populateTopHeadlines: boolean = true;
  ngOnInit(): void {
      this.newsApiService.topHeadlines().subscribe((result) => {
        console.log(result);
        this.topHeadlines = result.articles;
        this.populateTopHeadlines = false;
        }
      );

      this.nbSearchService.onSearchSubmit()
      .subscribe((data: any) => {
        this.newsApiService.everythingWithSpecificTopic(data.term).subscribe((result) => {
          this.topHeadlines = result.articles;
          this.populateTopHeadlines = false;
        })
      })
  }

  redirectToNewsPage(url : string) {
      this.document.location.href = url;
  }

  ngOnDestroy() {
    this.alive = false;
    this.store.dispatch(new NewsReset());
  }
}
