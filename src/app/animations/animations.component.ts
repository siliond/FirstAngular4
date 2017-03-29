import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [
    trigger('background', [
      state('red', style({
        backgroundColor: '#dc3f36',
        color: '#fff'
      })),
      state('green', style({
        backgroundColor: '#20b671',
        color: '#fff'
      })),
      state('blue', style({
        backgroundColor: 'blue',
        color: '#fff'
      })),
      state('white', style({
        backgroundColor: '#fff',
        color: '#7d7d7d'
      })),
      transition('void <=> *', animate('0ms')),
      transition('* <=> *', animate('300ms ease-in')),
    ])
  ]
})
export class AnimationsComponent implements OnInit {
  constructor() { }

  title = 'Animations example';

  color = "white";

  changeColor(color) {
    this.color = color;
  }

  ngOnInit() {
  }

}