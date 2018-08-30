import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '@state/app.interfaces';
import * as fromStore from '@state/relationTypes/relationType.selectors';
import { RelationType } from '@state/relationTypes/relationType.interface';
import { DeleteRelationType, LoadRelationTypes, SelectRelationType} from '@state/relationTypes/relationType.actions';
import { routeAnimations } from '../../../../layout/animation/route.animations';

@Component({
  templateUrl: './relationTypes.component.html',
  styleUrls: ['./relationTypes.component.scss'],
  animations: [routeAnimations]
})
export class RelationTypesComponent implements OnInit {
  relationTypes$: Observable<RelationType[]>;

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadRelationTypes());
    this.relationTypes$ = this.store.pipe(select(fromStore.getAllRelationTypes));
  }

  onDeleteRelationType(relationType: RelationType) {
    this.store.dispatch(new DeleteRelationType({ relationType: relationType }));
  }

  onEditRelationType(relationType: RelationType) {
    this.store.dispatch(new SelectRelationType({ relationType: relationType }));
    this.router.navigate(['relationTypes', relationType.id]);
  }
}
