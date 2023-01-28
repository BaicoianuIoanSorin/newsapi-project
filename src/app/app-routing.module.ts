import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsComponent} from "./news/news.component";
import {AppComponent} from "./app.component";
import {NewsModule} from "./news/news.module";

const routes: Routes = [
  {
        path: 'news',
        loadChildren: () => NewsModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
