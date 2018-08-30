import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '@environments/environment';
import { AppState } from './app.interfaces';
import { reducer as articleReducer } from './articles/article.reducers';
import { reducer as relationReducer } from './relations/relation.reducers';
import { reducer as relationTypeReducer } from './relationTypes/relationType.reducers';
import { reducer as valutaReducer } from './valutas/valuta.reducers';

export const appReducer: ActionReducerMap<AppState> = {
  router: routerReducer,
  article: articleReducer,
  relation: relationReducer,
  relationType: relationTypeReducer,
  valuta: valutaReducer,
};

export const appMetaReducers: MetaReducer<AppState>[] = !environment.production
  ? [storeFreeze]
  : [];
