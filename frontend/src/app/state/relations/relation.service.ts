import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Relation } from './relation.interface';

@Injectable({providedIn: 'root',})
export class RelationService {
  private relationsUrl = 'http://localhost:3000/relations'; // URL to web api
  constructor(private httpClient: HttpClient) {}

  getRelations(): Observable<Array<Relation>> {
    return this.httpClient.get<Relation[]>(this.relationsUrl);
  }

  getRelation(id: number): Observable<Relation> {
    return this.getRelations().pipe(
      map(relations => relations.find(relation => relation.id === id))
    );
  }

  save(relation: Relation): Observable<Relation> {
    if (relation.id) {
      return this.put(relation);
    }
    return this.post(relation);
  }

  delete(relation: Relation): Observable<Relation> {
    const url = `${this.relationsUrl}/${relation.id}`;

    return this.httpClient.delete<void>(url).pipe(switchMap(() => of(relation)));
  }

  // Add new Relation
  private post(relation: Relation): Observable<Relation> {
    // Only post the name property so the in-memory service will
    //  assign a new ID
    return this.httpClient.post<Relation>(this.relationsUrl, relation);
  }

  // Update existing Relation
  private put(relation: Relation): Observable<Relation> {
    const url = `${this.relationsUrl}/${relation.id}`;

    return this.httpClient.put(url, relation).pipe(switchMap(() => of(relation)));
  }
}
