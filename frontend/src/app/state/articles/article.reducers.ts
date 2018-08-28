import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Article } from './article.interface';
import { ArticleActions, ArticleActionTypes } from './article.actions';

export interface State extends EntityState<Article> {
  // additional entities state properties
  selectedArticleId: number;
  loading: boolean;
  error: string;
}

export const adapter: EntityAdapter<Article> = createEntityAdapter<Article>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedArticleId: null,
  loading: false,
  error: ''
});

export function reducer(state = initialState, action: ArticleActions): State {
  switch (action.type) {
    case ArticleActionTypes.AddArticle: {
      return adapter.addOne(action.payload.article, state);
    }

    case ArticleActionTypes.AddArticles: {
      return adapter.addMany(action.payload.articles, state);
    }

    case ArticleActionTypes.UpdateArticle: {
      return adapter.updateOne(action.payload.article, state);
    }

    case ArticleActionTypes.UpdateArticles: {
      return adapter.updateMany(action.payload.articles, state);
    }

    case ArticleActionTypes.DeleteArticle: {
      return adapter.removeOne(action.payload.article.id, state);
    }

    case ArticleActionTypes.DeleteArticles: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case ArticleActionTypes.LoadArticles: {
      return {
        ...adapter.removeAll(state),
        loading: true,
        error: ''
      };
    }

    case ArticleActionTypes.LoadArticlesSuccess: {
      return {
        ...adapter.addAll(action.payload.articles, state),
        loading: false
      };
    }

    case ArticleActionTypes.LoadArticlesFail: {
      return {
        ...state,
        loading: false,
        error: 'error loading articles'
      };
    }

    case ArticleActionTypes.LoadArticle: {
      return {
        ...state,
        loading: true,
        error: ''
      };
    }

    case ArticleActionTypes.LoadArticleSuccess: {
      return {
        ...adapter.addOne(action.payload.article, state),
        selectedArticleId: action.payload.article.id,
        loading: false
      };
    }

    case ArticleActionTypes.LoadArticleFail: {
      return {
        ...state,
        loading: false,
        error: 'error loading article'
      };
    }

    case ArticleActionTypes.ClearArticles: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const getSelectedId = (state: State) => state.selectedArticleId;
export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
