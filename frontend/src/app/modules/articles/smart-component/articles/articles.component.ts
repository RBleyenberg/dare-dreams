import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '@state/articles/article.selectors';
import { LoadArticles, DeleteArticle, SelectArticle } from '@state/articles/article.actions';
import { Article } from '@state/articles/article.interface';
import { AppState } from '@state/app.interfaces';

@Component({
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles$: Observable<Article[]>;

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadArticles());
    this.articles$ = this.store.pipe(select(fromStore.getAllArticles));
  }

  onDeleteArticle(article: Article) {
    this.store.dispatch(new DeleteArticle({ article: article }));
  }

  onEditArticle(article: Article) {
    this.store.dispatch(new SelectArticle({ article: article }));
    this.router.navigate(['articles', article.id]);
  }
}
