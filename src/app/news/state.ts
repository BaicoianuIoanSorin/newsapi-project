import {Injectable} from "@angular/core";
import {Action, State, StateContext} from "@ngxs/store";
import {NewsFetchInfo, NewsReset} from "./ news.actions";
import produce from "immer";
import {Article, TopHeadlinesResponse} from "angular-news-api";
import {NewsApiService} from "../api/ NewsApiService";

export interface NewsPageStateModel {
  isFetching: boolean;
  news: Article[];
  totalResults: number;
  isStatusOK: boolean;
}

export const defaultsState: NewsPageStateModel = {
  isFetching: false,
  news: [],
  totalResults: 0,
  isStatusOK: false
}

@State<NewsPageStateModel>( {
  name: 'newsPage',
  defaults: defaultsState,
})

@Injectable()
export class NewsState {

  topHeadlinesResults: any = [];

  constructor(
    private newsApiService: NewsApiService
  ) {
  }

  @Action(NewsFetchInfo)
  async newsFetchInfo(
    { getState, setState }: StateContext<NewsPageStateModel>,
    action: NewsFetchInfo) {
    const currentState = getState();

    let newState = produce(currentState, draft => {
      draft.isFetching = true;
    })

    setState(newState);

    this.newsApiService.topHeadlines().subscribe((result) => {
      this.topHeadlinesResults = result.articles;
    });

    newState = produce(currentState, draft => {
      draft.isFetching = false;
      if(this.topHeadlinesResults !== null) {
        draft.news = this.topHeadlinesResults.articles;
      }
    })
    setState(newState);
  }


  @Action(NewsReset)
  async newsReset(
    { getState, setState }: StateContext<NewsPageStateModel>,
    action: NewsReset) {
    setState(defaultsState);
  }
}

