import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigureFn, configureTests } from '../test-config.helper';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(
    async(() => {
      const configure: ConfigureFn = testBed => {
        testBed.configureTestingModule({
          declarations: [AppComponent],
          imports: [
            NoopAnimationsModule,
            RouterTestingModule,
            BrowserAnimationsModule,
            MatToolbarModule,
            MatIconModule,
            MatListModule,
            LayoutModule,
            MatSidenavModule
          ],
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
