import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Valuta } from '@state/valutas/valuta.interface';


@Component({
  selector: 'app-valutas-table',
  templateUrl: './valutas-table.component.html',
  styleUrls: ['./valutas-table.component.scss']
})
export class ValutasTableComponent {
  displayedColumns = ['name', 'price', 'actions'];
  @Input() valutas: Valuta[];
  @Output() delete = new EventEmitter<Valuta>();
  @Output() edit = new EventEmitter<Valuta>();

  constructor() {}

  onDeleteValuta(valuta: Valuta) {
    this.delete.emit(valuta);
  }

  onEditValuta(valuta: Valuta) {
    this.edit.emit(valuta);
  }
}
