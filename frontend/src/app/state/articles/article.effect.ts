import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError, withLatestFrom, tap } from 'rxjs/operators';

import { Article } from './article.interface';
import {
  ArticleActionTypes,
  AddArticle,
  AddArticleFail,
  AddArticleSuccess,
  DeleteArticle,
  DeleteArticleFail,
  DeleteArticleSuccess,
  LoadArticlesSuccess,
  LoadArticlesFail,
  LoadArticle,
  LoadArticleSuccess,
  LoadArticleFail,
  UpdateArticle,
  UpdateArticleFail,
  UpdateArticleSuccess
} from './article.actions';
import { AppState } from '../app.interfaces';
import * as fromStore from './article.selectors';
import { ArticleService } from './article.service';

@Injectable()
export class ArticleEffects {
  @Effect()
  add: Observable<Action> = this.actions$.pipe(
    ofType<AddArticle>(ArticleActionTypes.AddArticle),
    switchMap(action => this.service.save(action.payload.article)),
    map((article: Article) => new AddArticleSuccess({ article: article })),
    catchError(err => of(new AddArticleFail()))
  );

  @Effect({dispatch: false})
  AddArticleSuccess: Observable<Action> = this.actions$.pipe(
    ofType<AddArticleSuccess>(ArticleActionTypes.AddArticleSuccess),
    tap(() => this.router.navigate(['articles']))
  );

  @Effect()
  delete: Observable<Action> = this.actions$.pipe(
    ofType<DeleteArticle>(ArticleActionTypes.DeleteArticle),
    switchMap(action => this.service.delete(action.payload.article)),
    map((article: Article) => new DeleteArticleSuccess({ article: article })),
    catchError(err => of(new DeleteArticleFail()))
  );

  @Effect()
  load: Observable<Action> = this.actions$.pipe(
    ofType(ArticleActionTypes.LoadArticles),
    switchMap(() => this.service.getArticles()),
    map((articles: Article[]) => new LoadArticlesSuccess({ articles: articles })),
    catchError(err => of(new LoadArticlesFail()))
  );

  @Effect()
  loadById: Observable<Action> = this.actions$.pipe(
    ofType<LoadArticle>(ArticleActionTypes.LoadArticle),
    switchMap(action => this.service.getArticle(action.payload.id)),
    map((article: Article) => new LoadArticleSuccess({ article: article })),
    catchError(err => of(new LoadArticleFail()))
  );

  @Effect()
  update: Observable<Action> = this.actions$.pipe(
    ofType<UpdateArticle>(ArticleActionTypes.UpdateArticle),
    withLatestFrom(this.store.pipe(select(fromStore.getSelectedArticle))),
    switchMap(([action, article]) => this.service.save(article)),
    map((article: Article) => new UpdateArticleSuccess({ article: article })),
    catchError(err => of(new UpdateArticleFail()))
  );

  @Effect({dispatch: false})
  UpdateArticleSuccess: Observable<Action> = this.actions$.pipe(
    ofType<AddArticleSuccess>(ArticleActionTypes.UpdateArticleSuccess),
    tap(() => this.router.navigate(['articles']))
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private service: ArticleService,
    private store: Store<AppState>
  ) {}
}
