import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '@state/app.interfaces';
import * as fromStore from '@state/relations/relation.selectors';
import { Relation } from '@state/relations/relation.interface';
import { DeleteRelation, LoadRelations, SelectRelation} from '@state/relations/relation.actions';
import { routeAnimations } from '../../../../layout/animation/route.animations';

@Component({
  templateUrl: './relations.component.html',
  styleUrls: ['./relations.component.scss'],
  animations: [routeAnimations]
})
export class RelationsComponent implements OnInit {
  relations$: Observable<Relation[]>;

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadRelations());
    this.relations$ = this.store.pipe(select(fromStore.getAllRelations));
  }

  onDeleteRelation(relation: Relation) {
    this.store.dispatch(new DeleteRelation({ relation: relation }));
  }

  onEditRelation(relation: Relation) {
    this.store.dispatch(new SelectRelation({ relation: relation }));
    this.router.navigate(['relations', relation.id]);
  }
}
