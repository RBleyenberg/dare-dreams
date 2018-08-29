import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRelationTypes from './relationType.reducers';
import { State as RelationTypesState } from './relationType.reducers';

export const getRelationTypesState = createFeatureSelector<RelationTypesState>('relationType');

export const {
  selectIds: getRelationTypeIds,
  selectEntities: getRelationTypeEntities,
  selectAll: getAllRelationTypes,
  selectTotal: getTotalRelationTypes
} = fromRelationTypes.adapter.getSelectors(getRelationTypesState);

export const getSelectedRelationTypeId = createSelector(
  getRelationTypesState,
  fromRelationTypes.getSelectedId
);

export const getSelectedRelationType = createSelector(
  getSelectedRelationTypeId,
  getRelationTypeEntities,
  (selectedRelationTypeId, entities) => selectedRelationTypeId && entities[selectedRelationTypeId]
);

export const getLoading = createSelector(
  getRelationTypesState,
  fromRelationTypes.getLoading
);

export const getError = createSelector(
  getRelationTypesState,
  fromRelationTypes.getError
);
