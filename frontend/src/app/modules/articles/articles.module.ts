import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ArticlesComponent} from './smart-component/articles/articles.component';
import { MatButtonModule, MatCardModule, MatMenuModule, MatIconModule, MatInputModule, MatTableModule } from '@angular/material';
import { ArticleComponent } from './smart-component/article/article.component';
import { ArticlesTableComponent } from './dumb-component/articles-table/articles-table.component';
import { ArticleFormComponent } from './dumb-component/article-form/article-form.component';

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
    ArticleComponent,
    ArticleFormComponent,
    ArticlesComponent,
    ArticlesTableComponent
  ],
})
export class ArticlesModule {}
