import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Observable } from 'rxjs/Observable';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { AppState } from '@state/app.interfaces';
import * as fromStore from '@state/valutas/valuta.selectors';
import { Valuta } from '@state/valutas/valuta.interface';
import { AddValuta, LoadValuta, UpdateValuta } from '@state/valutas/valuta.actions';
import { routeAnimations } from '../../../../layout/animation/route.animations';

@Component({
  selector: 'app-valuta',
  templateUrl: './valuta.component.html',
  styleUrls: ['./valuta.component.scss'],
  animations: [routeAnimations]
})
export class ValutaComponent implements OnInit {
  valuta$: Observable<Valuta>;

  private valuta: Valuta;
  private valid: boolean;
  showErrors: boolean;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.valuta$ = this.activatedRoute.paramMap.pipe(
      filter(params => params.has('id')),
      map(params => params.get('id')),
      tap(id => this.store.dispatch(new LoadValuta({ id: +id }))),
      switchMap(() => this.store.pipe(select(fromStore.getSelectedValuta)))
    );

    this.showErrors = false;
  }

  onValutaChange(value: { valuta: Valuta, valid: boolean }) {
    this.valuta = value.valuta;
    this.valid = value.valid;
  }

  onSave() {
    this.showErrors = true;

    if (this.valid) {
      if (this.valuta.id) {
        this.updateValuta(this.valuta);
      } else {
        this.addValuta(this.valuta);
      }
    }
  }

  private addValuta(valuta: Valuta) {
    this.store.dispatch(new AddValuta({ valuta: valuta }));
  }

  private updateValuta(valuta: Valuta) {
    const update: Update<Valuta> = {
      id: valuta.id,
      changes: valuta
    };
    this.store.dispatch(new UpdateValuta({ valuta: update }));
  }
}
