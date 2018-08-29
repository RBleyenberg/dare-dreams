import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelationsComponent } from './smart-component/relations/relations.component';
import { RelationsModule } from './relations.module';
import { RelationComponent } from '@modules/relations/smart-component/relation/relation.component';


const routes: Routes = [
  {
    path: '',
    component: RelationsComponent
  },
  {
    path: 'add',
    component: RelationComponent
  },
  {
    path: ':id',
    component: RelationComponent
  }
];

@NgModule({
  imports: [RelationsModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelationsRoutingModule {}
