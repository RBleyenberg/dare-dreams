import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValutasComponent } from './smart-component/valutas/valutas.component';
import { ValutasModule } from './valutas.module';
import { ValutaComponent } from '@modules/valutas/smart-component/valuta/valuta.component';


const routes: Routes = [
  {
    path: '',
    component: ValutasComponent
  },
  {
    path: 'add',
    component: ValutaComponent
  },
  {
    path: ':id',
    component: ValutaComponent
  }
];

@NgModule({
  imports: [ValutasModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValutasRoutingModule {}
