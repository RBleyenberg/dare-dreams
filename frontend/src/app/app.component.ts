import { Component } from '@angular/core';
import { AnimationsService } from './layout/animation/animations.service';
import { routeAnimations } from './layout/animation/route.animations';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '../../node_modules/@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent {
  title = 'frontend';

  constructor(private breakpointObserver: BreakpointObserver, private animationService: AnimationsService) {}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

}
