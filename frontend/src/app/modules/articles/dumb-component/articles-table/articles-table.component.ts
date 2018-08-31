import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Article } from '@state/articles/article.interface';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../layout/animation/route.animations';

@Component({
  selector: 'app-articles-table',
  templateUrl: './articles-table.component.html',
  styleUrls: ['./articles-table.component.scss']
})
export class ArticlesTableComponent {
  displayedColumns = ['name', 'price', 'actions'];
  @Input() articles: Article[];
  @Output() delete = new EventEmitter<Article>();
  @Output() edit = new EventEmitter<Article>();

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  constructor() {
  }

  onDeleteArticle(article: Article) {
    this.delete.emit(article);
  }

  onEditArticle(article: Article) {
    this.edit.emit(article);
  }
}
