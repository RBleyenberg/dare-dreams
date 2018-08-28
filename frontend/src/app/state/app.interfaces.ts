import { RouterReducerState } from '@ngrx/router-store';
import {RouterStateUrl} from './shared/router.state';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
}

export type State = AppState;
