import { RouterReducerState } from '@ngrx/router-store';
import {RouterStateUrl} from './shared/router.state';
import { State as articleState } from './articles/article.reducers';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  product: articleState;
}

export type State = AppState;
