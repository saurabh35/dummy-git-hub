import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {RepositoriesComponent} from './repositories/repositories.component';
import {ProfileCardComponent} from './profile-card/profile-card.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProfilePageComponent,
    NavBarComponent,
    RepositoriesComponent,
    ProfileCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
