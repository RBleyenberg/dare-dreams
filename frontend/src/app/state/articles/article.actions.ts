import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Article } from './article.interface';

export enum ArticleActionTypes {
  LoadArticles = '[Article] Load Articles',
  LoadArticlesSuccess = '[Article] Load Articles Success',
  LoadArticlesFail = '[Article] Load Articles Fail',
  LoadArticle = '[Article] Load Article',
  LoadArticleSuccess = '[Article] Load Article Success',
  LoadArticleFail = '[Article] Load Article Fail',
  SelectArticle = '[Article] Select article',
  AddArticle = '[Article] Add Article',
  AddArticleFail = '[Article] Add Article Fail',
  AddArticleSuccess = '[Article] Add Article Success',
  UpsertArticle = '[Article] Upsert Article',
  AddArticles = '[Article] Add Articles',
  UpsertArticles = '[Article] Upsert Articles',
  UpdateArticle = '[Article] Update Article',
  UpdateArticleFail = '[Article] Update Article Fail',
  UpdateArticleSuccess = '[Article] Update Article Success',
  UpdateArticles = '[Article] Update Articles',
  DeleteArticle = '[Article] Delete Article',
  DeleteArticleFail = '[Article] Delete Article Fail',
  DeleteArticleSuccess = '[Article] Delete Article Success',
  DeleteArticles = '[Article] Delete Articles',
  ClearArticles = '[Article] Clear Articles'
}

export class LoadArticles implements Action {
  readonly type = ArticleActionTypes.LoadArticles;
}

export class LoadArticlesSuccess implements Action {
  readonly type = ArticleActionTypes.LoadArticlesSuccess;

  constructor(public payload: { articles: Article[] }) {}
}

export class LoadArticlesFail implements Action {
  readonly type = ArticleActionTypes.LoadArticlesFail;
}

export class LoadArticle implements Action {
  readonly type = ArticleActionTypes.LoadArticle;

  constructor(public payload: { id: number }) {}
}

export class LoadArticleSuccess implements Action {
  readonly type = ArticleActionTypes.LoadArticleSuccess;

  constructor(public payload: { article: Article }) {}
}

export class LoadArticleFail implements Action {
  readonly type = ArticleActionTypes.LoadArticleFail;
}

export class SelectArticle implements Action {
  readonly type = ArticleActionTypes.SelectArticle;

  constructor(public payload: { article: Article }) {}
}

export class AddArticle implements Action {
  readonly type = ArticleActionTypes.AddArticle;

  constructor(public payload: { article: Article }) {}
}

export class AddArticleFail implements Action {
  readonly type = ArticleActionTypes.AddArticleFail;
}

export class AddArticleSuccess implements Action {
  readonly type = ArticleActionTypes.AddArticleSuccess;

  constructor(public payload: { article: Article }) {}
}

export class UpsertArticle implements Action {
  readonly type = ArticleActionTypes.UpsertArticle;

  constructor(public payload: { article: Update<Article> }) {}
}

export class AddArticles implements Action {
  readonly type = ArticleActionTypes.AddArticles;

  constructor(public payload: { articles: Article[] }) {}
}

export class UpsertArticles implements Action {
  readonly type = ArticleActionTypes.UpsertArticles;

  constructor(public payload: { articles: Update<Article>[] }) {}
}

export class UpdateArticle implements Action {
  readonly type = ArticleActionTypes.UpdateArticle;

  constructor(public payload: { article: Update<Article> }) {}
}

export class UpdateArticleFail implements Action {
  readonly type = ArticleActionTypes.UpdateArticleFail;
}

export class UpdateArticleSuccess implements Action {
  readonly type = ArticleActionTypes.UpdateArticleSuccess;

  constructor(public payload: { article: Article }) {}
}

export class UpdateArticles implements Action {
  readonly type = ArticleActionTypes.UpdateArticles;

  constructor(public payload: { articles: Update<Article>[] }) {}
}

export class DeleteArticle implements Action {
  readonly type = ArticleActionTypes.DeleteArticle;

  constructor(public payload: { article: Article }) {}
}

export class DeleteArticleFail implements Action {
  readonly type = ArticleActionTypes.DeleteArticleFail;
}

export class DeleteArticleSuccess implements Action {
  readonly type = ArticleActionTypes.DeleteArticleSuccess;

  constructor(public payload: { article: Article }) {}
}

export class DeleteArticles implements Action {
  readonly type = ArticleActionTypes.DeleteArticles;

  constructor(public payload: { ids: number[] }) {}
}

export class ClearArticles implements Action {
  readonly type = ArticleActionTypes.ClearArticles;
}

export type ArticleActions =
  | LoadArticles
  | LoadArticlesSuccess
  | LoadArticlesFail
  | LoadArticle
  | LoadArticleSuccess
  | LoadArticleFail
  | SelectArticle
  | AddArticle
  | AddArticleFail
  | AddArticleSuccess
  | UpsertArticle
  | AddArticles
  | UpsertArticles
  | UpdateArticle
  | UpdateArticles
  | DeleteArticle
  | DeleteArticleFail
  | DeleteArticleSuccess
  | DeleteArticles
  | ClearArticles;
