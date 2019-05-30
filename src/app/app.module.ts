import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { PaintingsComponent } from './paintings/paintings.component';
import { WoodComponent } from './wood/wood.component';
import { WoodListComponent } from './wood-list/wood-list.component';
import { PaintingsListComponent } from './paintings-list/paintings-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    PaintingsComponent,
    WoodComponent,
    WoodListComponent,
    PaintingsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
