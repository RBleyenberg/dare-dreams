import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromValutas from './valuta.reducers';
import { State as ValutasState } from './valuta.reducers';

export const getValutasState = createFeatureSelector<ValutasState>('valuta');

export const {
  selectIds: getValutaIds,
  selectEntities: getValutaEntities,
  selectAll: getAllValutas,
  selectTotal: getTotalValutas
} = fromValutas.adapter.getSelectors(getValutasState);

export const getSelectedValutaId = createSelector(
  getValutasState,
  fromValutas.getSelectedId
);

export const getSelectedValuta = createSelector(
  getSelectedValutaId,
  getValutaEntities,
  (selectedValutaId, entities) => selectedValutaId && entities[selectedValutaId]
);

export const getLoading = createSelector(
  getValutasState,
  fromValutas.getLoading
);

export const getError = createSelector(
  getValutasState,
  fromValutas.getError
);
