import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {Game2048Component} from './game2048/game2048.component';
import {Menu2048Component} from './menu2048/menu2048.component';

const routes: Routes = [
  {
    path: 'game', component: AppComponent,
    children: [
      {path: '2048', component: Game2048Component},
      {path: 'home', component: Menu2048Component},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
