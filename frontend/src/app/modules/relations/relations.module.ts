import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RelationsComponent} from './smart-component/relations/relations.component';
import { MatButtonModule, MatCardModule, MatMenuModule, MatIconModule, MatInputModule, MatTableModule } from '@angular/material';
import { RelationComponent } from './smart-component/relation/relation.component';
import { RelationsTableComponent } from './dumb-component/relations-table/relations-table.component';
import { RelationFormComponent } from './dumb-component/relation-form/relation-form.component';

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
    RelationComponent,
    RelationFormComponent,
    RelationsComponent,
    RelationsTableComponent
  ],
})
export class RelationsModule {}
