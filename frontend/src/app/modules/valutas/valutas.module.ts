import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ValutasComponent} from './smart-component/valutas/valutas.component';
import { MatButtonModule, MatCardModule, MatMenuModule, MatIconModule, MatInputModule, MatTableModule } from '@angular/material';
import { ValutaComponent } from './smart-component/valuta/valuta.component';
import { ValutasTableComponent } from './dumb-component/valutas-table/valutas-table.component';
import { ValutaFormComponent } from './dumb-component/valuta-form/valuta-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  declarations: [
    ValutaComponent,
    ValutaFormComponent,
    ValutasComponent,
    ValutasTableComponent
  ]
})
export class ValutasModule {}
