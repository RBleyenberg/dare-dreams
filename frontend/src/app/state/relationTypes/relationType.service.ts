import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { RelationType } from './relationType.interface';

@Injectable({providedIn: 'root',})
export class RelationTypeService {
  private relationTypesUrl = 'http://localhost:3000/relationTypes'; // URL to web api
  constructor(private httpClient: HttpClient) {}

  getRelationTypes(): Observable<Array<RelationType>> {
    return this.httpClient.get<RelationType[]>(this.relationTypesUrl);
  }

  getRelationType(id: number): Observable<RelationType> {
    return this.getRelationTypes().pipe(
      map(relationTypes => relationTypes.find(relationType => relationType.id === id))
    );
  }

  save(relationType: RelationType): Observable<RelationType> {
    if (relationType.id) {
      return this.put(relationType);
    }
    return this.post(relationType);
  }

  delete(relationType: RelationType): Observable<RelationType> {
    const url = `${this.relationTypesUrl}/${relationType.id}`;

    return this.httpClient.delete<void>(url).pipe(switchMap(() => of(relationType)));
  }

  // Add new RelationType
  private post(relationType: RelationType): Observable<RelationType> {
    // Only post the name property so the in-memory service will
    //  assign a new ID
    return this.httpClient.post<RelationType>(this.relationTypesUrl, relationType);
  }

  // Update existing RelationType
  private put(relationType: RelationType): Observable<RelationType> {
    const url = `${this.relationTypesUrl}/${relationType.id}`;

    return this.httpClient.put(url, relationType).pipe(switchMap(() => of(relationType)));
  }
}
