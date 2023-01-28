import {Component, OnInit} from '@angular/core';
import {NewsApiService} from "../api/ NewsApiService";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit{

  constructor(private newsApiService: NewsApiService) {
  }

  ngOnInit() : void {
    this.newsApiService.topHeadlines().subscribe((result) => {
      console.log(result);
    });
  }
}
