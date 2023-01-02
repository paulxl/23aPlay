import { Component } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { GarnetsComponent } from 'src/app/geo-related/garnets/garnets.component';

@Component({
  selector: 'app-nav-two',
  templateUrl: './nav-two.component.html',
  styleUrls: ['./nav-two.component.scss'],
})
export class NavTwoComponent {
  constructor(private routes: ActivatedRoute) {}
}
