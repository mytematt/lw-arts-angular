import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MyAppComponent } from './my-app.component';
import { HomeComponent } from './home.component'

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '', pathMatch:'full', redirectTo: "/home"}]

