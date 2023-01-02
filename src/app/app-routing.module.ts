import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavTwoComponent } from './nav-two/nav-two.component';
import { GarnetsComponent } from './geo-related/garnets/garnets.component';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
import { FrontPageComponent } from './front-page/front-page.component';
import { CodingComponent } from './coding/coding.component';
import { ReadsComponent } from './reads/reads.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GraphComponent } from './graph/graph.component';

const appRoutes: Routes = [
  { path: '', component: NavTwoComponent },
  { path: 'front-page', component: FrontPageComponent },
  { path: 'coding', component: CodingComponent },
  { path: 'reads', component: ReadsComponent },
  { path: 'garnets', component: GarnetsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'graph', component: GraphComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: false, // debugging purposes only
      //preloadingStrategy: SelectMultipleControlValueAccessor,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
