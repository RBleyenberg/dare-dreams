import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '@state/app.interfaces';
import * as fromStore from '@state/valutas/valuta.selectors';
import { Valuta } from '@state/valutas/valuta.interface';
import { DeleteValuta, LoadValutas, SelectValuta} from '@state/valutas/valuta.actions';

@Component({
  templateUrl: './valutas.component.html',
  styleUrls: ['./valutas.component.scss']
})
export class ValutasComponent implements OnInit {
  valutas$: Observable<Valuta[]>;

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadValutas());
    this.valutas$ = this.store.pipe(select(fromStore.getAllValutas));
  }

  onDeleteValuta(valuta: Valuta) {
    this.store.dispatch(new DeleteValuta({ valuta: valuta }));
  }

  onEditValuta(valuta: Valuta) {
    this.store.dispatch(new SelectValuta({ valuta: valuta }));
    this.router.navigate(['valutas', valuta.id]);
  }
}
