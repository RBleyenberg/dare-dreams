import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './shared/router.state';
import { State as articleState } from './articles/article.reducers';
import { State as relationState } from './relations/relation.reducers';
import { State as relationTypeState } from './relationTypes/relationType.reducers';
import { State as valutaState } from './valutas/valuta.reducers';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  article: articleState;
  relation: relationState;
  relationType: relationTypeState;
  valuta: valutaState;
}

export type State = AppState;
