import {Selector} from "@ngxs/store";
import {NewsPageStateModel, NewsState} from "./state";

export class NewsSelector {
  @Selector([NewsState])
  static isFetching(state: NewsPageStateModel) {
    return state.isFetching;
  }

  @Selector([NewsState])
  static news(state: NewsPageStateModel) {
    return state.news;
  }

  @Selector([NewsState])
  static totalResults(state: NewsPageStateModel) {
    return state.totalResults;
  }

  @Selector([NewsState])
  static isStatusOK(state: NewsPageStateModel) {
    return state.isStatusOK;
  }
}
