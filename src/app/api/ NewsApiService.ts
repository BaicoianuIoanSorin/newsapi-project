import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = '2219ee7594c14d258905b2cb3e9214bc';

  constructor(private http:HttpClient) { }
  topHeadlines() : Observable<any> {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=2219ee7594c14d258905b2cb3e9214bc');
  }
}
