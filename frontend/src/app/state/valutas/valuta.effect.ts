import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError, withLatestFrom, tap } from 'rxjs/operators';

import { Valuta } from './valuta.interface';
import {
  ValutaActionTypes,
  AddValuta,
  AddValutaFail,
  AddValutaSuccess,
  DeleteValuta,
  DeleteValutaFail,
  DeleteValutaSuccess,
  LoadValutasSuccess,
  LoadValutasFail,
  LoadValuta,
  LoadValutaSuccess,
  LoadValutaFail,
  UpdateValuta,
  UpdateValutaFail,
  UpdateValutaSuccess
} from './valuta.actions';
import { AppState } from '../app.interfaces';
import * as fromStore from './valuta.selectors';
import { ValutaService } from './valuta.service';

@Injectable()
export class ValutaEffects {
  @Effect()
  add: Observable<Action> = this.actions$.pipe(
    ofType<AddValuta>(ValutaActionTypes.AddValuta),
    switchMap(action => this.service.save(action.payload.valuta)),
    map((valuta: Valuta) => new AddValutaSuccess({ valuta: valuta })),
    catchError(err => of(new AddValutaFail()))
  );

  @Effect({dispatch: false})
  AddValutaSuccess: Observable<Action> = this.actions$.pipe(
    ofType<AddValutaSuccess>(ValutaActionTypes.AddValutaSuccess),
    tap(() => this.router.navigate(['valutas']))
  );

  @Effect()
  delete: Observable<Action> = this.actions$.pipe(
    ofType<DeleteValuta>(ValutaActionTypes.DeleteValuta),
    switchMap(action => this.service.delete(action.payload.valuta)),
    map((valuta: Valuta) => new DeleteValutaSuccess({ valuta: valuta })),
    catchError(err => of(new DeleteValutaFail()))
  );

  @Effect()
  load: Observable<Action> = this.actions$.pipe(
    ofType(ValutaActionTypes.LoadValutas),
    switchMap(() => this.service.getValutas()),
    map((valutas: Valuta[]) => new LoadValutasSuccess({ valutas: valutas })),
    catchError(err => of(new LoadValutasFail()))
  );

  @Effect()
  loadById: Observable<Action> = this.actions$.pipe(
    ofType<LoadValuta>(ValutaActionTypes.LoadValuta),
    switchMap(action => this.service.getValuta(action.payload.id)),
    map((valuta: Valuta) => new LoadValutaSuccess({ valuta: valuta })),
    catchError(err => of(new LoadValutaFail()))
  );

  @Effect()
  update: Observable<Action> = this.actions$.pipe(
    ofType<UpdateValuta>(ValutaActionTypes.UpdateValuta),
    withLatestFrom(this.store.pipe(select(fromStore.getSelectedValuta))),
    switchMap(([action, valuta]) => this.service.save(valuta)),
    map((valuta: Valuta) => new UpdateValutaSuccess({ valuta: valuta })),
    catchError(err => of(new UpdateValutaFail()))
  );

  @Effect({dispatch: false})
  UpdateValutaSuccess: Observable<Action> = this.actions$.pipe(
    ofType<AddValutaSuccess>(ValutaActionTypes.UpdateValutaSuccess),
    tap(() => this.router.navigate(['valutas']))
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private service: ValutaService,
    private store: Store<AppState>
  ) {}
}
