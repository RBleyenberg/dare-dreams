import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Observable } from 'rxjs/Observable';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { AppState } from '@state/app.interfaces';
import * as fromStore from '@state/relationTypes/relationType.selectors';
import { RelationType } from '@state/relationTypes/relationType.interface';
import { AddRelationType, LoadRelationType, UpdateRelationType } from '@state/relationTypes/relationType.actions';

@Component({
  selector: 'app-relationType',
  templateUrl: './relationType.component.html',
  styleUrls: ['./relationType.component.scss']
})
export class RelationTypeComponent implements OnInit {
  relationType$: Observable<RelationType>;

  private relationType: RelationType;
  private valid: boolean;
  private showErrors: boolean;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.relationType$ = this.activatedRoute.paramMap.pipe(
      filter(params => params.has('id')),
      map(params => params.get('id')),
      tap(id => this.store.dispatch(new LoadRelationType({ id: +id }))),
      switchMap(() => this.store.pipe(select(fromStore.getSelectedRelationType)))
    );

    this.showErrors = false;
  }

  onRelationTypeChange(value: { relationType: RelationType, valid: boolean }) {
    this.relationType = value.relationType;
    this.valid = value.valid;
  }

  onSave() {
    this.showErrors = true;

    if (this.valid) {
      if (this.relationType.id) {
        this.updateRelationType(this.relationType);
      } else {
        this.addRelationType(this.relationType);
      }
    }
  }

  private addRelationType(relationType: RelationType) {
    this.store.dispatch(new AddRelationType({ relationType: relationType }));
  }

  private updateRelationType(relationType: RelationType) {
    const update: Update<RelationType> = {
      id: relationType.id,
      changes: relationType
    };
    this.store.dispatch(new UpdateRelationType({ relationType: update }));
  }
}
