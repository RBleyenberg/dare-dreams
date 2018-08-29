import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Relation } from './relation.interface';

export enum RelationActionTypes {
  LoadRelations = '[Relation] Load Relations',
  LoadRelationsSuccess = '[Relation] Load Relations Success',
  LoadRelationsFail = '[Relation] Load Relations Fail',
  LoadRelation = '[Relation] Load Relation',
  LoadRelationSuccess = '[Relation] Load Relation Success',
  LoadRelationFail = '[Relation] Load Relation Fail',
  SelectRelation = '[Relation] Select relation',
  AddRelation = '[Relation] Add Relation',
  AddRelationFail = '[Relation] Add Relation Fail',
  AddRelationSuccess = '[Relation] Add Relation Success',
  UpsertRelation = '[Relation] Upsert Relation',
  AddRelations = '[Relation] Add Relations',
  UpsertRelations = '[Relation] Upsert Relations',
  UpdateRelation = '[Relation] Update Relation',
  UpdateRelationFail = '[Relation] Update Relation Fail',
  UpdateRelationSuccess = '[Relation] Update Relation Success',
  UpdateRelations = '[Relation] Update Relations',
  DeleteRelation = '[Relation] Delete Relation',
  DeleteRelationFail = '[Relation] Delete Relation Fail',
  DeleteRelationSuccess = '[Relation] Delete Relation Success',
  DeleteRelations = '[Relation] Delete Relations',
  ClearRelations = '[Relation] Clear Relations'
}

export class LoadRelations implements Action {
  readonly type = RelationActionTypes.LoadRelations;
}

export class LoadRelationsSuccess implements Action {
  readonly type = RelationActionTypes.LoadRelationsSuccess;

  constructor(public payload: { relations: Relation[] }) {}
}

export class LoadRelationsFail implements Action {
  readonly type = RelationActionTypes.LoadRelationsFail;
}

export class LoadRelation implements Action {
  readonly type = RelationActionTypes.LoadRelation;

  constructor(public payload: { id: number }) {}
}

export class LoadRelationSuccess implements Action {
  readonly type = RelationActionTypes.LoadRelationSuccess;

  constructor(public payload: { relation: Relation }) {}
}

export class LoadRelationFail implements Action {
  readonly type = RelationActionTypes.LoadRelationFail;
}

export class SelectRelation implements Action {
  readonly type = RelationActionTypes.SelectRelation;

  constructor(public payload: { relation: Relation }) {}
}

export class AddRelation implements Action {
  readonly type = RelationActionTypes.AddRelation;

  constructor(public payload: { relation: Relation }) {}
}

export class AddRelationFail implements Action {
  readonly type = RelationActionTypes.AddRelationFail;
}

export class AddRelationSuccess implements Action {
  readonly type = RelationActionTypes.AddRelationSuccess;

  constructor(public payload: { relation: Relation }) {}
}

export class UpsertRelation implements Action {
  readonly type = RelationActionTypes.UpsertRelation;

  constructor(public payload: { relation: Update<Relation> }) {}
}

export class AddRelations implements Action {
  readonly type = RelationActionTypes.AddRelations;

  constructor(public payload: { relations: Relation[] }) {}
}

export class UpsertRelations implements Action {
  readonly type = RelationActionTypes.UpsertRelations;

  constructor(public payload: { relations: Update<Relation>[] }) {}
}

export class UpdateRelation implements Action {
  readonly type = RelationActionTypes.UpdateRelation;

  constructor(public payload: { relation: Update<Relation> }) {}
}

export class UpdateRelationFail implements Action {
  readonly type = RelationActionTypes.UpdateRelationFail;
}

export class UpdateRelationSuccess implements Action {
  readonly type = RelationActionTypes.UpdateRelationSuccess;

  constructor(public payload: { relation: Relation }) {}
}

export class UpdateRelations implements Action {
  readonly type = RelationActionTypes.UpdateRelations;

  constructor(public payload: { relations: Update<Relation>[] }) {}
}

export class DeleteRelation implements Action {
  readonly type = RelationActionTypes.DeleteRelation;

  constructor(public payload: { relation: Relation }) {}
}

export class DeleteRelationFail implements Action {
  readonly type = RelationActionTypes.DeleteRelationFail;
}

export class DeleteRelationSuccess implements Action {
  readonly type = RelationActionTypes.DeleteRelationSuccess;

  constructor(public payload: { relation: Relation }) {}
}

export class DeleteRelations implements Action {
  readonly type = RelationActionTypes.DeleteRelations;

  constructor(public payload: { ids: number[] }) {}
}

export class ClearRelations implements Action {
  readonly type = RelationActionTypes.ClearRelations;
}

export type RelationActions =
  | LoadRelations
  | LoadRelationsSuccess
  | LoadRelationsFail
  | LoadRelation
  | LoadRelationSuccess
  | LoadRelationFail
  | SelectRelation
  | AddRelation
  | AddRelationFail
  | AddRelationSuccess
  | UpsertRelation
  | AddRelations
  | UpsertRelations
  | UpdateRelation
  | UpdateRelations
  | DeleteRelation
  | DeleteRelationFail
  | DeleteRelationSuccess
  | DeleteRelations
  | ClearRelations;
