import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavTwoComponent } from './nav-two/nav-two.component';
//import { RouterModule } from '@angular/router';
import { GarnetsComponent } from './geo-related/garnets/garnets.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { CodingComponent } from './coding/coding.component';
import { ReadsComponent } from './reads/reads.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GraphComponent } from './graph/graph.component';

@NgModule({
  declarations: [AppComponent, NavTwoComponent, GarnetsComponent, FrontPageComponent, CodingComponent, ReadsComponent, GalleryComponent, GraphComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
