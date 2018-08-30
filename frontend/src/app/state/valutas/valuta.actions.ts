import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Valuta } from './valuta.interface';

export enum ValutaActionTypes {
  LoadValutas = '[Valuta] Load Valutas',
  LoadValutasSuccess = '[Valuta] Load Valutas Success',
  LoadValutasFail = '[Valuta] Load Valutas Fail',
  LoadValuta = '[Valuta] Load Valuta',
  LoadValutaSuccess = '[Valuta] Load Valuta Success',
  LoadValutaFail = '[Valuta] Load Valuta Fail',
  SelectValuta = '[Valuta] Select valuta',
  AddValuta = '[Valuta] Add Valuta',
  AddValutaFail = '[Valuta] Add Valuta Fail',
  AddValutaSuccess = '[Valuta] Add Valuta Success',
  UpsertValuta = '[Valuta] Upsert Valuta',
  AddValutas = '[Valuta] Add Valutas',
  UpsertValutas = '[Valuta] Upsert Valutas',
  UpdateValuta = '[Valuta] Update Valuta',
  UpdateValutaFail = '[Valuta] Update Valuta Fail',
  UpdateValutaSuccess = '[Valuta] Update Valuta Success',
  UpdateValutas = '[Valuta] Update Valutas',
  DeleteValuta = '[Valuta] Delete Valuta',
  DeleteValutaFail = '[Valuta] Delete Valuta Fail',
  DeleteValutaSuccess = '[Valuta] Delete Valuta Success',
  DeleteValutas = '[Valuta] Delete Valutas',
  ClearValutas = '[Valuta] Clear Valutas'
}

export class LoadValutas implements Action {
  readonly type = ValutaActionTypes.LoadValutas;
}

export class LoadValutasSuccess implements Action {
  readonly type = ValutaActionTypes.LoadValutasSuccess;

  constructor(public payload: { valutas: Valuta[] }) {}
}

export class LoadValutasFail implements Action {
  readonly type = ValutaActionTypes.LoadValutasFail;
}

export class LoadValuta implements Action {
  readonly type = ValutaActionTypes.LoadValuta;

  constructor(public payload: { id: number }) {}
}

export class LoadValutaSuccess implements Action {
  readonly type = ValutaActionTypes.LoadValutaSuccess;

  constructor(public payload: { valuta: Valuta }) {}
}

export class LoadValutaFail implements Action {
  readonly type = ValutaActionTypes.LoadValutaFail;
}

export class SelectValuta implements Action {
  readonly type = ValutaActionTypes.SelectValuta;

  constructor(public payload: { valuta: Valuta }) {}
}

export class AddValuta implements Action {
  readonly type = ValutaActionTypes.AddValuta;

  constructor(public payload: { valuta: Valuta }) {}
}

export class AddValutaFail implements Action {
  readonly type = ValutaActionTypes.AddValutaFail;
}

export class AddValutaSuccess implements Action {
  readonly type = ValutaActionTypes.AddValutaSuccess;

  constructor(public payload: { valuta: Valuta }) {}
}

export class UpsertValuta implements Action {
  readonly type = ValutaActionTypes.UpsertValuta;

  constructor(public payload: { valuta: Update<Valuta> }) {}
}

export class AddValutas implements Action {
  readonly type = ValutaActionTypes.AddValutas;

  constructor(public payload: { valutas: Valuta[] }) {}
}

export class UpsertValutas implements Action {
  readonly type = ValutaActionTypes.UpsertValutas;

  constructor(public payload: { valutas: Update<Valuta>[] }) {}
}

export class UpdateValuta implements Action {
  readonly type = ValutaActionTypes.UpdateValuta;

  constructor(public payload: { valuta: Update<Valuta> }) {}
}

export class UpdateValutaFail implements Action {
  readonly type = ValutaActionTypes.UpdateValutaFail;
}

export class UpdateValutaSuccess implements Action {
  readonly type = ValutaActionTypes.UpdateValutaSuccess;

  constructor(public payload: { valuta: Valuta }) {}
}

export class UpdateValutas implements Action {
  readonly type = ValutaActionTypes.UpdateValutas;

  constructor(public payload: { valutas: Update<Valuta>[] }) {}
}

export class DeleteValuta implements Action {
  readonly type = ValutaActionTypes.DeleteValuta;

  constructor(public payload: { valuta: Valuta }) {}
}

export class DeleteValutaFail implements Action {
  readonly type = ValutaActionTypes.DeleteValutaFail;
}

export class DeleteValutaSuccess implements Action {
  readonly type = ValutaActionTypes.DeleteValutaSuccess;

  constructor(public payload: { valuta: Valuta }) {}
}

export class DeleteValutas implements Action {
  readonly type = ValutaActionTypes.DeleteValutas;

  constructor(public payload: { ids: number[] }) {}
}

export class ClearValutas implements Action {
  readonly type = ValutaActionTypes.ClearValutas;
}

export type ValutaActions =
  | LoadValutas
  | LoadValutasSuccess
  | LoadValutasFail
  | LoadValuta
  | LoadValutaSuccess
  | LoadValutaFail
  | SelectValuta
  | AddValuta
  | AddValutaFail
  | AddValutaSuccess
  | UpsertValuta
  | AddValutas
  | UpsertValutas
  | UpdateValuta
  | UpdateValutas
  | DeleteValuta
  | DeleteValutaFail
  | DeleteValutaSuccess
  | DeleteValutas
  | ClearValutas;
