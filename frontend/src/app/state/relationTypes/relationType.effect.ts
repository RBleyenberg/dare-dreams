import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError, withLatestFrom, tap } from 'rxjs/operators';

import { RelationType } from './relationType.interface';
import {
  RelationTypeActionTypes,
  AddRelationType,
  AddRelationTypeFail,
  AddRelationTypeSuccess,
  DeleteRelationType,
  DeleteRelationTypeFail,
  DeleteRelationTypeSuccess,
  LoadRelationTypesSuccess,
  LoadRelationTypesFail,
  LoadRelationType,
  LoadRelationTypeSuccess,
  LoadRelationTypeFail,
  UpdateRelationType,
  UpdateRelationTypeFail,
  UpdateRelationTypeSuccess
} from './relationType.actions';
import { AppState } from '../app.interfaces';
import * as fromStore from './relationType.selectors';
import { RelationTypeService } from './relationType.service';

@Injectable()
export class RelationTypeEffects {
  @Effect()
  add: Observable<Action> = this.actions$.pipe(
    ofType<AddRelationType>(RelationTypeActionTypes.AddRelationType),
    switchMap(action => this.service.save(action.payload.relationType)),
    map((relationType: RelationType) => new AddRelationTypeSuccess({ relationType: relationType })),
    catchError(err => of(new AddRelationTypeFail()))
  );

  @Effect({dispatch: false})
  AddRelationTypeSuccess: Observable<Action> = this.actions$.pipe(
    ofType<AddRelationTypeSuccess>(RelationTypeActionTypes.AddRelationTypeSuccess),
    tap(() => this.router.navigate(['relatie-type']))
  );

  @Effect()
  delete: Observable<Action> = this.actions$.pipe(
    ofType<DeleteRelationType>(RelationTypeActionTypes.DeleteRelationType),
    switchMap(action => this.service.delete(action.payload.relationType)),
    map((relationType: RelationType) => new DeleteRelationTypeSuccess({ relationType: relationType })),
    catchError(err => of(new DeleteRelationTypeFail()))
  );

  @Effect()
  load: Observable<Action> = this.actions$.pipe(
    ofType(RelationTypeActionTypes.LoadRelationTypes),
    switchMap(() => this.service.getRelationTypes()),
    map((relationTypes: RelationType[]) => new LoadRelationTypesSuccess({ relationTypes: relationTypes })),
    catchError(err => of(new LoadRelationTypesFail()))
  );

  @Effect()
  loadById: Observable<Action> = this.actions$.pipe(
    ofType<LoadRelationType>(RelationTypeActionTypes.LoadRelationType),
    switchMap(action => this.service.getRelationType(action.payload.id)),
    map((relationType: RelationType) => new LoadRelationTypeSuccess({ relationType: relationType })),
    catchError(err => of(new LoadRelationTypeFail()))
  );

  @Effect()
  update: Observable<Action> = this.actions$.pipe(
    ofType<UpdateRelationType>(RelationTypeActionTypes.UpdateRelationType),
    withLatestFrom(this.store.pipe(select(fromStore.getSelectedRelationType))),
    switchMap(([action, relationType]) => this.service.save(relationType)),
    map((relationType: RelationType) => new UpdateRelationTypeSuccess({ relationType: relationType })),
    catchError(err => of(new UpdateRelationTypeFail()))
  );

  @Effect({dispatch: false})
  UpdateRelationTypeSuccess: Observable<Action> = this.actions$.pipe(
    ofType<AddRelationTypeSuccess>(RelationTypeActionTypes.UpdateRelationTypeSuccess),
    tap(() => this.router.navigate(['relatie-type']))
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private service: RelationTypeService,
    private store: Store<AppState>
  ) {}
}
