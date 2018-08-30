import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Observable } from 'rxjs/Observable';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { AppState } from '@state/app.interfaces';
import * as fromStore from '@state/articles/article.selectors';
import { Article } from '@state/articles/article.interface';
import { AddArticle, LoadArticle, UpdateArticle } from '@state/articles/article.actions';
import { routeAnimations } from '../../../../layout/animation/route.animations';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  animations: [routeAnimations]
})
export class ArticleComponent implements OnInit {

  article$: Observable<Article>;

  private article: Article;
  private valid: boolean;
  showErrors: boolean;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.article$ = this.activatedRoute.paramMap.pipe(
      filter(params => params.has('id')),
      map(params => params.get('id')),
      tap(id => this.store.dispatch(new LoadArticle({ id: +id }))),
      switchMap(() => this.store.pipe(select(fromStore.getSelectedArticle)))
    );

    this.showErrors = false;
  }

  onArticleChange(value: { article: Article, valid: boolean }) {
    this.article = value.article;
    this.valid = value.valid;
  }

  onSave() {
    this.showErrors = true;

    if (this.valid) {
      if (this.article.id) {
        this.updateArticle(this.article);
      } else {
        this.addArticle(this.article);
      }
    }
  }

  private addArticle(article: Article) {
    this.store.dispatch(new AddArticle({ article: article }));
  }

  private updateArticle(article: Article) {
    const update: Update<Article> = {
      id: article.id,
      changes: article
    };
    this.store.dispatch(new UpdateArticle({ article: update }));
  }
}
