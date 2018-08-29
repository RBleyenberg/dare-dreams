import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelationTypesComponent } from './smart-component/relationTypes/relationTypes.component';
import { RelationTypesModule } from './relationTypes.module';
import { RelationTypeComponent } from '@modules/relationTypes/smart-component/relationType/relationType.component';

const routes: Routes = [
  {
    path: '',
    component: RelationTypesComponent
  },
  {
    path: 'add',
    component: RelationTypeComponent
  },
  {
    path: ':id',
    component: RelationTypeComponent
  }
];

@NgModule({
  imports: [RelationTypesModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelationTypesRoutingModule {}
