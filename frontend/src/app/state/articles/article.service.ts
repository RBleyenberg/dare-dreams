import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Article } from './article.interface';

@Injectable({providedIn: 'root',})
export class ArticleService {
  private articlesUrl = 'http://localhost:3000/articles'; // URL to web api
  constructor(private httpClient: HttpClient) {}

  getArticles(): Observable<Array<Article>> {
    return this.httpClient.get<Article[]>(this.articlesUrl);
  }

  getArticle(id: number): Observable<Article> {
    return this.getArticles().pipe(
      map(articles => articles.find(article => article.id === id))
    );
  }

  save(article: Article): Observable<Article> {
    if (article.id) {
      return this.put(article);
    }
    return this.post(article);
  }

  delete(article: Article): Observable<Article> {
    const url = `${this.articlesUrl}/${article.id}`;

    return this.httpClient.delete<void>(url).pipe(switchMap(() => of(article)));
  }

  // Add new Article
  private post(article: Article): Observable<Article> {
    // Only post the name property so the in-memory service will
    //  assign a new ID
    return this.httpClient.post<Article>(this.articlesUrl, article);
  }

  // Update existing Article
  private put(article: Article): Observable<Article> {
    const url = `${this.articlesUrl}/${article.id}`;

    return this.httpClient.put(url, article).pipe(switchMap(() => of(article)));
  }
}
