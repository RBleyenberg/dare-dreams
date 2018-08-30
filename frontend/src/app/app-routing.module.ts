import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'articles',
    loadChildren: 'src/app/modules/articles/articles-routing.module#ArticlesRoutingModule'
  },
  {
    path: 'relations',
    loadChildren: 'src/app/modules/relations/relations-routing.module#RelationsRoutingModule'
  },
  {
    path: 'relatie-type',
    loadChildren: 'src/app/modules/relationTypes/relationTypes-routing.module#RelationTypesRoutingModule'
  },
  {
    path: 'valutas',
    loadChildren: 'src/app/modules/valutas/valutas-routing.module#ValutasRoutingModule'
  }
];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
