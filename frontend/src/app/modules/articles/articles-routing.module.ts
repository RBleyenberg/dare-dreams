import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './smart-component/articles/articles.component';
import { ArticlesModule } from './articles.module';
import { ArticleComponent } from '@modules/articles/smart-component/article/article.component';


const routes: Routes = [
  {
    path: '',
    component: ArticlesComponent
  },
  {
    path: 'add',
    component: ArticleComponent
  },
  {
    path: ':id',
    component: ArticleComponent
  }
];

@NgModule({
  imports: [ArticlesModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule {}
