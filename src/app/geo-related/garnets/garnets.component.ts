import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-garnets',
  templateUrl: './garnets.component.html',
  styleUrls: ['./garnets.component.scss'],
})
export class GarnetsComponent {
  constructor() {}

  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
  //   window.addEventListener('load', function() {
  //     function arrowUp() {
  //         console.log('inside js file');
  //         const XHR = new XMLHttpRequest();
  //         const fd = new FormData(form);
  //         XHR.addEventListener('load', function(event) {
  //             alert(event.target.resonseText);
  //         });
  //         XHR.addEventListener('error', function(event) {
  //             alert('Oops! Something Went Wrong.');
  //         });
  //         XHR.send(fd);
  //     }
  //     const form = document.getElementById('top');
  //     form.addEventListener('submit', function(event) {
  //         event.preventDefault();
  //         animateArrow(e);
  //     });
  //     function animateArrow(e) {
  //         try {
  //             $('html, body').animate({
  //                 scrollTop: 0
  //             }, 500);
  //             return false;
  //         } catch (error) {
  //             if (e.bypassEventsInProxies || arguments.indexOf(t) < 0) return screen.call(this, n);
  //         }
  //     }
  // });
}
