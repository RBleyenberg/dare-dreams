import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigureFn, configureTests } from '../../test-config.helper';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {

  let fixture: ComponentFixture<LayoutComponent>;
  let component: LayoutComponent;

  beforeEach(
    async(() => {
      const configure: ConfigureFn = testBed => {
        testBed.configureTestingModule({
          declarations: [LayoutComponent],
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
        fixture = testBed.createComponent(LayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
    })
  );

  it(
    'should create the layout',
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
