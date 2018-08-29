import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { RelationType } from './relationType.interface';
import { RelationTypeActions, RelationTypeActionTypes } from './relationType.actions';

export interface State extends EntityState<RelationType> {
  // additional entities state properties
  selectedRelationTypeId: number;
  loading: boolean;
  error: string;
}

export const adapter: EntityAdapter<RelationType> = createEntityAdapter<RelationType>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedRelationTypeId: null,
  loading: false,
  error: ''
});

export function reducer(state = initialState, action: RelationTypeActions): State {
  switch (action.type) {
    case RelationTypeActionTypes.AddRelationType: {
      return adapter.addOne(action.payload.relationType, state);
    }

    case RelationTypeActionTypes.AddRelationTypes: {
      return adapter.addMany(action.payload.relationTypes, state);
    }

    case RelationTypeActionTypes.UpdateRelationType: {
      return adapter.updateOne(action.payload.relationType, state);
    }

    case RelationTypeActionTypes.UpdateRelationTypes: {
      return adapter.updateMany(action.payload.relationTypes, state);
    }

    case RelationTypeActionTypes.DeleteRelationType: {
      return adapter.removeOne(action.payload.relationType.id, state);
    }

    case RelationTypeActionTypes.DeleteRelationTypes: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case RelationTypeActionTypes.LoadRelationTypes: {
      return {
        ...adapter.removeAll(state),
        loading: true,
        error: ''
      };
    }

    case RelationTypeActionTypes.LoadRelationTypesSuccess: {
      return {
        ...adapter.addAll(action.payload.relationTypes, state),
        loading: false
      };
    }

    case RelationTypeActionTypes.LoadRelationTypesFail: {
      return {
        ...state,
        loading: false,
        error: 'error loading relationTypes'
      };
    }

    case RelationTypeActionTypes.LoadRelationType: {
      return {
        ...state,
        loading: true,
        error: ''
      };
    }

    case RelationTypeActionTypes.LoadRelationTypeSuccess: {
      return {
        ...adapter.addOne(action.payload.relationType, state),
        selectedRelationTypeId: action.payload.relationType.id,
        loading: false
      };
    }

    case RelationTypeActionTypes.LoadRelationTypeFail: {
      return {
        ...state,
        loading: false,
        error: 'error loading relationType'
      };
    }

    case RelationTypeActionTypes.ClearRelationTypes: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const getSelectedId = (state: State) => state.selectedRelationTypeId;
export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
