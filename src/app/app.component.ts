import {Component, OnInit} from '@angular/core';
import {NbMenuItem, NbSidebarService} from "@nebular/theme";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'newsapi-project';

  GENERAL_MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    link: '/',
    icon: 'home-outline'
  },
  {
    title: 'News',
    link: 'news',
    icon: 'book-open-outline'
  },
  ];

  constructor(private sideBarService: NbSidebarService) {
  }

  toggle() {
    this.sideBarService.toggle(true);
    return false;
  }
}
