import { Component } from '@angular/core';
import {AnimationsService} from './layout/animation/animations.service';
import {routeAnimations} from './layout/animation/route.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent {
  title = 'frontend';

  constructor(private animationService: AnimationsService) {}


}
