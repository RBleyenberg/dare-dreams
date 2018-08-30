import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Valuta } from './valuta.interface';

@Injectable({providedIn: 'root'})
export class ValutaService {
  private valutasUrl = 'http://localhost:3000/valutas'; // URL to web api
  constructor(private httpClient: HttpClient) {}

  getValutas(): Observable<Array<Valuta>> {
    return this.httpClient.get<Valuta[]>(this.valutasUrl);
  }

  getValuta(id: number): Observable<Valuta> {
    return this.getValutas().pipe(
      map(valutas => valutas.find(valuta => valuta.id === id))
    );
  }

  save(valuta: Valuta): Observable<Valuta> {
    if (valuta.id) {
      return this.put(valuta);
    }
    return this.post(valuta);
  }

  delete(valuta: Valuta): Observable<Valuta> {
    const url = `${this.valutasUrl}/${valuta.id}`;

    return this.httpClient.delete<void>(url).pipe(switchMap(() => of(valuta)));
  }

  // Add new Valuta
  private post(valuta: Valuta): Observable<Valuta> {
    // Only post the name property so the in-memory service will
    //  assign a new ID
    return this.httpClient.post<Valuta>(this.valutasUrl, valuta);
  }

  // Update existing Valuta
  private put(valuta: Valuta): Observable<Valuta> {
    const url = `${this.valutasUrl}/${valuta.id}`;

    return this.httpClient.put(url, valuta).pipe(switchMap(() => of(valuta)));
  }
}
