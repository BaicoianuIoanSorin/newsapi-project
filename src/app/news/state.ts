import {Injectable} from "@angular/core";
import {NewsApiService} from "../api/ NewsApiService";
import {Action, State, StateContext} from "@ngxs/store";
import {NewsFetchInfo, NewsReset} from "./ news.actions";
import produce from "immer";

export interface NewsPageStateModel {
  isFetching: boolean;
  news: any[];
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

    let result: any = null;

    try {
      result = await this.newsApiService.topHeadlines();
    } catch (e ) {
      console.log(` error: ${e}`);
    }

    newState = produce(currentState, draft => {
      draft.isFetching = false;
      if(result != null) {
          draft.news = result.articles;
          draft.totalResults = result.totalResults;
          draft.isStatusOK = result.status == 'ok';
      }
    })

    console.log('asdadas')
    setState(newState);
  }


  @Action(NewsReset)
  async newsReset(
    { getState, setState }: StateContext<NewsPageStateModel>,
    action: NewsReset) {
    setState(defaultsState);
  }
}

