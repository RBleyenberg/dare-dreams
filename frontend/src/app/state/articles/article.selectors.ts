import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromArticles from './article.reducers';
import { State as ArticlesState } from './article.reducers';

export const getArticlesState = createFeatureSelector<ArticlesState>('article');

export const {
  selectIds: getArticleIds,
  selectEntities: getArticleEntities,
  selectAll: getAllArticles,
  selectTotal: getTotalArticles
} = fromArticles.adapter.getSelectors(getArticlesState);

export const getSelectedArticleId = createSelector(
  getArticlesState,
  fromArticles.getSelectedId
);

export const getSelectedArticle = createSelector(
  getSelectedArticleId,
  getArticleEntities,
  (selectedArticleId, entities) => selectedArticleId && entities[selectedArticleId]
);

export const getLoading = createSelector(
  getArticlesState,
  fromArticles.getLoading
);

export const getError = createSelector(
  getArticlesState,
  fromArticles.getError
);
