import {Injectable} from "@angular/core";
import {Action, State, StateContext} from "@ngxs/store";
import {NewsFetchInfo, NewsReset} from "./ news.actions";
import produce from "immer";
import {Article, TopHeadlinesResponse} from "angular-news-api";
import {NewsApiService} from "../api/ NewsApiService";
import {Menu} from "@angular/cdk/menu";
import {Main} from "../model/main";

export interface NewsPageStateModel {
  isFetching: boolean;
  news: any;
  totalResults: number;
  isStatusOK: boolean;
}

export const defaultsState: NewsPageStateModel = {
  isFetching: false,
  news: null,
  totalResults: 0,
  isStatusOK: false
}

@State<NewsPageStateModel>( {
  name: 'newsPage',
  defaults: defaultsState,
})

@Injectable()
export class NewsState {

  topHeadlinesResults: Main | undefined;

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

    newState = produce(currentState, draft => {
      draft.isFetching = false;
      this.newsApiService.topHeadlines().subscribe((result) => {
        let stringifyJson = JSON.stringify(result);
        console.log(stringifyJson);
        draft.news = JSON.parse(stringifyJson);
      });
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

