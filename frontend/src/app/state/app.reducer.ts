import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../environments/environment';
import { AppState } from './app.interfaces';
import { reducer as articleReducer } from './articles/article.reducers';

export const appReducer: ActionReducerMap<AppState> = {
  router: routerReducer,
  article: articleReducer,
};

export const appMetaReducers: MetaReducer<AppState>[] = !environment.production
  ? [storeFreeze]
  : [];
