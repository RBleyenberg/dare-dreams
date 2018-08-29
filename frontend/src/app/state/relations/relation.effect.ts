import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError, withLatestFrom, tap } from 'rxjs/operators';

import { Relation } from './relation.interface';
import {
  RelationActionTypes,
  AddRelation,
  AddRelationFail,
  AddRelationSuccess,
  DeleteRelation,
  DeleteRelationFail,
  DeleteRelationSuccess,
  LoadRelationsSuccess,
  LoadRelationsFail,
  LoadRelation,
  LoadRelationSuccess,
  LoadRelationFail,
  UpdateRelation,
  UpdateRelationFail,
  UpdateRelationSuccess
} from './relation.actions';
import { AppState } from '../app.interfaces';
import * as fromStore from './relation.selectors';
import { RelationService } from './relation.service';

@Injectable()
export class RelationEffects {
  @Effect()
  add: Observable<Action> = this.actions$.pipe(
    ofType<AddRelation>(RelationActionTypes.AddRelation),
    switchMap(action => this.service.save(action.payload.relation)),
    map((relation: Relation) => new AddRelationSuccess({ relation: relation })),
    catchError(err => of(new AddRelationFail()))
  );

  @Effect({dispatch: false})
  AddRelationSuccess: Observable<Action> = this.actions$.pipe(
    ofType<AddRelationSuccess>(RelationActionTypes.AddRelationSuccess),
    tap(() => this.router.navigate(['relations']))
  );

  @Effect()
  delete: Observable<Action> = this.actions$.pipe(
    ofType<DeleteRelation>(RelationActionTypes.DeleteRelation),
    switchMap(action => this.service.delete(action.payload.relation)),
    map((relation: Relation) => new DeleteRelationSuccess({ relation: relation })),
    catchError(err => of(new DeleteRelationFail()))
  );

  @Effect()
  load: Observable<Action> = this.actions$.pipe(
    ofType(RelationActionTypes.LoadRelations),
    switchMap(() => this.service.getRelations()),
    map((relations: Relation[]) => new LoadRelationsSuccess({ relations: relations })),
    catchError(err => of(new LoadRelationsFail()))
  );

  @Effect()
  loadById: Observable<Action> = this.actions$.pipe(
    ofType<LoadRelation>(RelationActionTypes.LoadRelation),
    switchMap(action => this.service.getRelation(action.payload.id)),
    map((relation: Relation) => new LoadRelationSuccess({ relation: relation })),
    catchError(err => of(new LoadRelationFail()))
  );

  @Effect()
  update: Observable<Action> = this.actions$.pipe(
    ofType<UpdateRelation>(RelationActionTypes.UpdateRelation),
    withLatestFrom(this.store.pipe(select(fromStore.getSelectedRelation))),
    switchMap(([action, relation]) => this.service.save(relation)),
    map((relation: Relation) => new UpdateRelationSuccess({ relation: relation })),
    catchError(err => of(new UpdateRelationFail()))
  );

  @Effect({dispatch: false})
  UpdateRelationSuccess: Observable<Action> = this.actions$.pipe(
    ofType<AddRelationSuccess>(RelationActionTypes.UpdateRelationSuccess),
    tap(() => this.router.navigate(['relations']))
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private service: RelationService,
    private store: Store<AppState>
  ) {}
}
