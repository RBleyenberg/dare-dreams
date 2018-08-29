import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RelationTypesComponent} from './smart-component/relationTypes/relationTypes.component';
import { MatButtonModule, MatCardModule, MatMenuModule, MatIconModule, MatInputModule, MatTableModule } from '@angular/material';
import { RelationTypeComponent } from './smart-component/relationType/relationType.component';
import { RelationTypesTableComponent } from './dumb-component/relationTypes-table/relationTypes-table.component';
import { RelationTypeFormComponent } from './dumb-component/relationType-form/relationType-form.component';

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
    RelationTypeComponent,
    RelationTypeFormComponent,
    RelationTypesComponent,
    RelationTypesTableComponent
  ]
})
export class RelationTypesModule {}
