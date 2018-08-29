import { Component, Input, EventEmitter, Output } from '@angular/core';
import { RelationType } from '@state/relationTypes/relationType.interface';


@Component({
  selector: 'app-relationTypes-table',
  templateUrl: './relationTypes-table.component.html',
  styleUrls: ['./relationTypes-table.component.scss']
})
export class RelationTypesTableComponent {
  displayedColumns = ['name', 'price', 'actions'];
  @Input() relationTypes: RelationType[];
  @Output() delete = new EventEmitter<RelationType>();
  @Output() edit = new EventEmitter<RelationType>();

  constructor() {}

  onDeleteRelationType(relationType: RelationType) {
    this.delete.emit(relationType);
  }

  onEditRelationType(relationType: RelationType) {
    this.edit.emit(relationType);
  }
}
