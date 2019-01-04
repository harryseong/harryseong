import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-navpage',
  templateUrl: './navpage.component.html',
  styleUrls: ['./navpage.component.css'],
  animations: [
    trigger('transitionAnimations', [
      state('fadeInDrop', style({ opacity: 1, transform: 'translateY(0.5em)',
      })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease', style({ opacity: 1, transform: 'translateY(0.5em)'})),
        style({ opacity: 1 }),
      ]),
    ])
  ],
})
export class NavpageComponent implements OnInit {
  transition = '';

  constructor() { }

  ngOnInit() {
    this.transition = 'fadeInDrop';
  }

}
