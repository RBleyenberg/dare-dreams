import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Relation } from './relation.interface';
import { RelationActions, RelationActionTypes } from './relation.actions';

export interface State extends EntityState<Relation> {
  // additional entities state properties
  selectedRelationId: number;
  loading: boolean;
  error: string;
}

export const adapter: EntityAdapter<Relation> = createEntityAdapter<Relation>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedRelationId: null,
  loading: false,
  error: ''
});

export function reducer(state = initialState, action: RelationActions): State {
  switch (action.type) {
    case RelationActionTypes.AddRelation: {
      return adapter.addOne(action.payload.relation, state);
    }

    case RelationActionTypes.AddRelations: {
      return adapter.addMany(action.payload.relations, state);
    }

    case RelationActionTypes.UpdateRelation: {
      return adapter.updateOne(action.payload.relation, state);
    }

    case RelationActionTypes.UpdateRelations: {
      return adapter.updateMany(action.payload.relations, state);
    }

    case RelationActionTypes.DeleteRelation: {
      return adapter.removeOne(action.payload.relation.id, state);
    }

    case RelationActionTypes.DeleteRelations: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case RelationActionTypes.LoadRelations: {
      return {
        ...adapter.removeAll(state),
        loading: true,
        error: ''
      };
    }

    case RelationActionTypes.LoadRelationsSuccess: {
      return {
        ...adapter.addAll(action.payload.relations, state),
        loading: false
      };
    }

    case RelationActionTypes.LoadRelationsFail: {
      return {
        ...state,
        loading: false,
        error: 'error loading relations'
      };
    }

    case RelationActionTypes.LoadRelation: {
      return {
        ...state,
        loading: true,
        error: ''
      };
    }

    case RelationActionTypes.LoadRelationSuccess: {
      return {
        ...adapter.addOne(action.payload.relation, state),
        selectedRelationId: action.payload.relation.id,
        loading: false
      };
    }

    case RelationActionTypes.LoadRelationFail: {
      return {
        ...state,
        loading: false,
        error: 'error loading relation'
      };
    }

    case RelationActionTypes.ClearRelations: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const getSelectedId = (state: State) => state.selectedRelationId;
export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
