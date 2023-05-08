import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ContattiComponent } from './contatti/contatti.component';

import{ HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { SingleComponent } from './single/single.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SafePipe } from './safe.pipe';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    ContattiComponent,
    SearchComponent,
    FooterComponent,
    SingleComponent,
    NotFoundComponent,
    SafePipe,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
