import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Observable } from 'rxjs/Observable';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { AppState } from '@state/app.interfaces';
import * as fromStore from '@state/relations/relation.selectors';
import { Relation } from '@state/relations/relation.interface';
import { AddRelation, LoadRelation, UpdateRelation } from '@state/relations/relation.actions';
import { routeAnimations } from '../../../../layout/animation/route.animations';

@Component({
  selector: 'app-relation',
  templateUrl: './relation.component.html',
  styleUrls: ['./relation.component.scss'],
  animations: [routeAnimations]
})
export class RelationComponent implements OnInit {
  relation$: Observable<Relation>;

  private relation: Relation;
  private valid: boolean;
  showErrors: boolean;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.relation$ = this.activatedRoute.paramMap.pipe(
      filter(params => params.has('id')),
      map(params => params.get('id')),
      tap(id => this.store.dispatch(new LoadRelation({ id: +id }))),
      switchMap(() => this.store.pipe(select(fromStore.getSelectedRelation)))
    );

    this.showErrors = false;
  }

  onRelationChange(value: { relation: Relation, valid: boolean }) {
    this.relation = value.relation;
    this.valid = value.valid;
  }

  onSave() {
    this.showErrors = true;

    if (this.valid) {
      if (this.relation.id) {
        this.updateRelation(this.relation);
      } else {
        this.addRelation(this.relation);
      }
    }
  }

  private addRelation(relation: Relation) {
    this.store.dispatch(new AddRelation({ relation: relation }));
  }

  private updateRelation(relation: Relation) {
    const update: Update<Relation> = {
      id: relation.id,
      changes: relation
    };
    this.store.dispatch(new UpdateRelation({ relation: update }));
  }
}
