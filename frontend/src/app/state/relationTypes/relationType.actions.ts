import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { RelationType } from './relationType.interface';

export enum RelationTypeActionTypes {
  LoadRelationTypes = '[RelationType] Load RelationTypes',
  LoadRelationTypesSuccess = '[RelationType] Load RelationTypes Success',
  LoadRelationTypesFail = '[RelationType] Load RelationTypes Fail',
  LoadRelationType = '[RelationType] Load RelationType',
  LoadRelationTypeSuccess = '[RelationType] Load RelationType Success',
  LoadRelationTypeFail = '[RelationType] Load RelationType Fail',
  SelectRelationType = '[RelationType] Select relationType',
  AddRelationType = '[RelationType] Add RelationType',
  AddRelationTypeFail = '[RelationType] Add RelationType Fail',
  AddRelationTypeSuccess = '[RelationType] Add RelationType Success',
  UpsertRelationType = '[RelationType] Upsert RelationType',
  AddRelationTypes = '[RelationType] Add RelationTypes',
  UpsertRelationTypes = '[RelationType] Upsert RelationTypes',
  UpdateRelationType = '[RelationType] Update RelationType',
  UpdateRelationTypeFail = '[RelationType] Update RelationType Fail',
  UpdateRelationTypeSuccess = '[RelationType] Update RelationType Success',
  UpdateRelationTypes = '[RelationType] Update RelationTypes',
  DeleteRelationType = '[RelationType] Delete RelationType',
  DeleteRelationTypeFail = '[RelationType] Delete RelationType Fail',
  DeleteRelationTypeSuccess = '[RelationType] Delete RelationType Success',
  DeleteRelationTypes = '[RelationType] Delete RelationTypes',
  ClearRelationTypes = '[RelationType] Clear RelationTypes'
}

export class LoadRelationTypes implements Action {
  readonly type = RelationTypeActionTypes.LoadRelationTypes;
}

export class LoadRelationTypesSuccess implements Action {
  readonly type = RelationTypeActionTypes.LoadRelationTypesSuccess;

  constructor(public payload: { relationTypes: RelationType[] }) {}
}

export class LoadRelationTypesFail implements Action {
  readonly type = RelationTypeActionTypes.LoadRelationTypesFail;
}

export class LoadRelationType implements Action {
  readonly type = RelationTypeActionTypes.LoadRelationType;

  constructor(public payload: { id: number }) {}
}

export class LoadRelationTypeSuccess implements Action {
  readonly type = RelationTypeActionTypes.LoadRelationTypeSuccess;

  constructor(public payload: { relationType: RelationType }) {}
}

export class LoadRelationTypeFail implements Action {
  readonly type = RelationTypeActionTypes.LoadRelationTypeFail;
}

export class SelectRelationType implements Action {
  readonly type = RelationTypeActionTypes.SelectRelationType;

  constructor(public payload: { relationType: RelationType }) {}
}

export class AddRelationType implements Action {
  readonly type = RelationTypeActionTypes.AddRelationType;

  constructor(public payload: { relationType: RelationType }) {}
}

export class AddRelationTypeFail implements Action {
  readonly type = RelationTypeActionTypes.AddRelationTypeFail;
}

export class AddRelationTypeSuccess implements Action {
  readonly type = RelationTypeActionTypes.AddRelationTypeSuccess;

  constructor(public payload: { relationType: RelationType }) {}
}

export class UpsertRelationType implements Action {
  readonly type = RelationTypeActionTypes.UpsertRelationType;

  constructor(public payload: { relationType: Update<RelationType> }) {}
}

export class AddRelationTypes implements Action {
  readonly type = RelationTypeActionTypes.AddRelationTypes;

  constructor(public payload: { relationTypes: RelationType[] }) {}
}

export class UpsertRelationTypes implements Action {
  readonly type = RelationTypeActionTypes.UpsertRelationTypes;

  constructor(public payload: { relationTypes: Update<RelationType>[] }) {}
}

export class UpdateRelationType implements Action {
  readonly type = RelationTypeActionTypes.UpdateRelationType;

  constructor(public payload: { relationType: Update<RelationType> }) {}
}

export class UpdateRelationTypeFail implements Action {
  readonly type = RelationTypeActionTypes.UpdateRelationTypeFail;
}

export class UpdateRelationTypeSuccess implements Action {
  readonly type = RelationTypeActionTypes.UpdateRelationTypeSuccess;

  constructor(public payload: { relationType: RelationType }) {}
}

export class UpdateRelationTypes implements Action {
  readonly type = RelationTypeActionTypes.UpdateRelationTypes;

  constructor(public payload: { relationTypes: Update<RelationType>[] }) {}
}

export class DeleteRelationType implements Action {
  readonly type = RelationTypeActionTypes.DeleteRelationType;

  constructor(public payload: { relationType: RelationType }) {}
}

export class DeleteRelationTypeFail implements Action {
  readonly type = RelationTypeActionTypes.DeleteRelationTypeFail;
}

export class DeleteRelationTypeSuccess implements Action {
  readonly type = RelationTypeActionTypes.DeleteRelationTypeSuccess;

  constructor(public payload: { relationType: RelationType }) {}
}

export class DeleteRelationTypes implements Action {
  readonly type = RelationTypeActionTypes.DeleteRelationTypes;

  constructor(public payload: { ids: number[] }) {}
}

export class ClearRelationTypes implements Action {
  readonly type = RelationTypeActionTypes.ClearRelationTypes;
}

export type RelationTypeActions =
  | LoadRelationTypes
  | LoadRelationTypesSuccess
  | LoadRelationTypesFail
  | LoadRelationType
  | LoadRelationTypeSuccess
  | LoadRelationTypeFail
  | SelectRelationType
  | AddRelationType
  | AddRelationTypeFail
  | AddRelationTypeSuccess
  | UpsertRelationType
  | AddRelationTypes
  | UpsertRelationTypes
  | UpdateRelationType
  | UpdateRelationTypes
  | DeleteRelationType
  | DeleteRelationTypeFail
  | DeleteRelationTypeSuccess
  | DeleteRelationTypes
  | ClearRelationTypes;
