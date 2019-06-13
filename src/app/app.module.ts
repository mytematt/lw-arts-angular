import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BannerComponent } from './banner/banner.component';
import { PaintingsComponent } from './paintings/paintings.component';
import { WoodComponent } from './wood/wood.component';
import { WoodListComponent } from './wood-list/wood-list.component';
import { PaintingsListComponent } from './paintings-list/paintings-list.component';
import { MyAppComponent } from './my-app.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes'
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    BannerComponent,
    PaintingsComponent,
    WoodComponent,
    WoodListComponent,
    PaintingsListComponent,
    MyAppComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [MyAppComponent]
})
export class AppModule { }
