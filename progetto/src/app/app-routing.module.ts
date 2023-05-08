import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { ContattiComponent } from './contatti/contatti.component';
import { SingleComponent } from './single/single.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'search', component: SearchComponent},
  {path: 'contatti', component: ContattiComponent},
  {path: 'single/:id', component: SingleComponent},
  {path: 'list', component: ListComponent},
  {path: 'not-found', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
