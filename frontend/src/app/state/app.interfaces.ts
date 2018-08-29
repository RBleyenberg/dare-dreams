import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './shared/router.state';
import { State as articleState } from './articles/article.reducers';
import { State as relationState } from './relations/relation.reducers';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  article: articleState;
  relation: relationState;
}

export type State = AppState;
