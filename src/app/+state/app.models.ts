import { ActionReducerMap} from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { InjectionToken } from '@angular/core';

export interface IRootState {
  router: any;
}

export const appReducers: ActionReducerMap<IRootState> = {
  router: routerReducer
};

export const ROOT_REDUCER_TOKEN = new InjectionToken<ActionReducerMap<IRootState>>('RootReducer', {
  factory: () => appReducers
});
