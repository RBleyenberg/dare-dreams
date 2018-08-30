import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Valuta } from './valuta.interface';
import { ValutaActions, ValutaActionTypes } from './valuta.actions';

export interface State extends EntityState<Valuta> {
  // additional entities state properties
  selectedValutaId: number;
  loading: boolean;
  error: string;
}

export const adapter: EntityAdapter<Valuta> = createEntityAdapter<Valuta>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedValutaId: null,
  loading: false,
  error: ''
});

export function reducer(state = initialState, action: ValutaActions): State {
  switch (action.type) {
    case ValutaActionTypes.AddValuta: {
      return adapter.addOne(action.payload.valuta, state);
    }

    case ValutaActionTypes.AddValutas: {
      return adapter.addMany(action.payload.valutas, state);
    }

    case ValutaActionTypes.UpdateValuta: {
      return adapter.updateOne(action.payload.valuta, state);
    }

    case ValutaActionTypes.UpdateValutas: {
      return adapter.updateMany(action.payload.valutas, state);
    }

    case ValutaActionTypes.DeleteValuta: {
      return adapter.removeOne(action.payload.valuta.id, state);
    }

    case ValutaActionTypes.DeleteValutas: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case ValutaActionTypes.LoadValutas: {
      return {
        ...adapter.removeAll(state),
        loading: true,
        error: ''
      };
    }

    case ValutaActionTypes.LoadValutasSuccess: {
      return {
        ...adapter.addAll(action.payload.valutas, state),
        loading: false
      };
    }

    case ValutaActionTypes.LoadValutasFail: {
      return {
        ...state,
        loading: false,
        error: 'error loading valutas'
      };
    }

    case ValutaActionTypes.LoadValuta: {
      return {
        ...state,
        loading: true,
        error: ''
      };
    }

    case ValutaActionTypes.LoadValutaSuccess: {
      return {
        ...adapter.addOne(action.payload.valuta, state),
        selectedValutaId: action.payload.valuta.id,
        loading: false
      };
    }

    case ValutaActionTypes.LoadValutaFail: {
      return {
        ...state,
        loading: false,
        error: 'error loading valuta'
      };
    }

    case ValutaActionTypes.ClearValutas: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const getSelectedId = (state: State) => state.selectedValutaId;
export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
