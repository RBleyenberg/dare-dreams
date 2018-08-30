import { Component, Input, EventEmitter, Output, AfterViewChecked, AfterViewInit } from '@angular/core';
import { Article } from '@state/articles/article.interface';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../layout/animation/route.animations';
import { Sort } from '@angular/material';


@Component({
  selector: 'app-articles-table',
  templateUrl: './articles-table.component.html',
  styleUrls: ['./articles-table.component.scss']
})
export class ArticlesTableComponent implements AfterViewInit {

  displayedColumns = ['name', 'price', 'actions'];
  @Input() articles: Article[];
  @Output() delete = new EventEmitter<Article>();
  @Output() edit = new EventEmitter<Article>();

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  sortedData: Article[];

  constructor() {

  }

  ngAfterViewInit() {
    this.sortedData = this.articles.slice();
    console.log(this.sortedData);
  }

  sortData(sort: Sort) {
    const data = this.articles.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'price': return compare(a.price, b.price, isAsc);
        default: return 0;
      }
    });
  }

  onDeleteArticle(article: Article) {
    this.delete.emit(article);
  }

  onEditArticle(article: Article) {
    this.edit.emit(article);
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
