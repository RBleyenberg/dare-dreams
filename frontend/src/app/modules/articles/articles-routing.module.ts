import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './smart-component/articles/articles.component';
import { ArticlesModule } from './articles.module';


const routes: Routes = [
  {
    path: '',
    component: ArticlesComponent
  },
  {
    path: 'add',
    component: ArticlesComponent
  },
  {
    path: ':id',
    component: ArticlesComponent
  }
];

@NgModule({
  imports: [ArticlesModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule {}
