import {Component, OnInit} from '@angular/core';
import {NbSidebarService} from "@nebular/theme";
import {NewsApiService} from "./api/ NewsApiService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'newsapi-project';

  constructor(private sideBarService: NbSidebarService) {
  }

  ngOnInit() {
  }

  toggle() {
    this.sideBarService.toggle(true);
    return false;
  }
}
