import {Component, OnInit} from '@angular/core';
import {NbSidebarService} from "@nebular/theme";
import {MenuItem} from "./constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'newsapi-project';

  GENERAL_MENU_ITEMS: MenuItem[] = [
    new MenuItem("/news","News")
  ];

  constructor(private sideBarService: NbSidebarService) {
  }

  toggle() {
    this.sideBarService.toggle(true);
    return false;
  }
}
