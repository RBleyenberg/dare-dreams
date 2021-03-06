import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { MatDialogModule, MatSnackBarModule } from '@angular/material';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@environments/environment';
import { appMetaReducers, appReducer } from './app.reducer';
import { CustomRouterStateSerializer } from './shared/router.state';
import { ArticleEffects } from './articles/article.effect';
import { RelationEffects } from '@state/relations/relation.effect';
import { RelationTypeEffects } from '@state/relationTypes/relationType.effect';
import { ValutaEffects } from '@state/valutas/valuta.effect';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatSnackBarModule,
    StoreRouterConnectingModule,
    StoreModule.forRoot(appReducer, { metaReducers: appMetaReducers }),
    EffectsModule.forRoot([
      ArticleEffects,
      RelationEffects,
      RelationTypeEffects,
      ValutaEffects,
    ]),
    !environment.production ? StoreDevtoolsModule.instrument({maxAge: 15}) : []
  ],
  declarations: []
})
export class StateModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StateModule,
      providers: [
        /**
         * The `RouterStateSnapshot` provided by the `Router` is a large complex structure.
         * A custom RouterStateSerializer is used to parse the `RouterStateSnapshot` provided
         * by `@ngrx/router-store` to include only the desired pieces of the snapshot.
         */
        { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
      ]
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
      parentModule: StateModule
  ) {
    if (parentModule) {
      throw new Error('StateModule is already loaded. Import it in the AppModule only');
    }
  }
}
