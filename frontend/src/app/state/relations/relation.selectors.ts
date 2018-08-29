import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRelations from './relation.reducers';
import { State as RelationsState } from './relation.reducers';

export const getRelationsState = createFeatureSelector<RelationsState>('relation');

export const {
  selectIds: getRelationIds,
  selectEntities: getRelationEntities,
  selectAll: getAllRelations,
  selectTotal: getTotalRelations
} = fromRelations.adapter.getSelectors(getRelationsState);

export const getSelectedRelationId = createSelector(
  getRelationsState,
  fromRelations.getSelectedId
);

export const getSelectedRelation = createSelector(
  getSelectedRelationId,
  getRelationEntities,
  (selectedRelationId, entities) => selectedRelationId && entities[selectedRelationId]
);

export const getLoading = createSelector(
  getRelationsState,
  fromRelations.getLoading
);

export const getError = createSelector(
  getRelationsState,
  fromRelations.getError
);
