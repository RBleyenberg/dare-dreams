import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Relation } from '@state/relations/relation.interface';


@Component({
  selector: 'app-relations-table',
  templateUrl: './relations-table.component.html',
  styleUrls: ['./relations-table.component.scss']
})
export class RelationsTableComponent {
  displayedColumns = ['name', 'price', 'actions'];
  @Input() relations: Relation[];
  @Output() delete = new EventEmitter<Relation>();
  @Output() edit = new EventEmitter<Relation>();

  constructor() {}

  onDeleteRelation(relation: Relation) {
    this.delete.emit(relation);
  }

  onEditRelation(relation: Relation) {
    this.edit.emit(relation);
  }
}
