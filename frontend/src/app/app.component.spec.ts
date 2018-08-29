import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { async, fakeAsync, tick, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ConfigureFn, configureTests } from '../config.helpers.testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(
    async(() => {
      const configure: ConfigureFn = testBed => {
        testBed.configureTestingModule({
          declarations: [AppComponent],
          imports: [NoopAnimationsModule],
          schemas: [NO_ERRORS_SCHEMA],
        });
      };

      configureTests(configure).then(testBed => {
        fixture = testBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
    })
  );

  it(
    'should create the app',
    async(() => {
      const app = component;
      expect(app).toBeTruthy();
    })
  );

  it('snaps', () => {
    expect(fixture).toMatchSnapshot();
  });


  it('looks async but is synchronous', <any>fakeAsync((): void => {
    let flag = false;
    setTimeout(() => {
      flag = true;
    }, 100);
    expect(flag).toBe(false);
    tick(50);
    expect(flag).toBe(false);
    tick(50);
    expect(flag).toBe(true);
  }));
});
