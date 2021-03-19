import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HomePageComponent} from './pages/home-page/home-page.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GraphComponent } from './components/graph/graph.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: '', component: HomePageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes),
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
